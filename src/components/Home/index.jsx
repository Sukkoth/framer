import React from "react";
import bgImage from "../../assets/my-bg.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <div className='min-h-[90dvh] relative'>
        <div className='absolute inset-0 flex overflow-hidden'>
          <img
            src={bgImage}
            alt='bg-image'
            className='scale-[290%] grayscale-[0.4] translate-y-[-90px] ms-[30%]'
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-l from-black to-transparent from-[1%] to-[60%] px-20'>
          <AnimatedText />
          <p className='w-1/2 text-xl leading-10 text-stone-400 pt-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            quos, possimus itaque nulla dicta quisquamz consectetur placeat.
            Dolorum, neque. Officiis dicta ab cum consequuntur aspernatur.
          </p>
        </div>
      </div>
    </section>
  );
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function AnimatedText({ text = "Amalia Sanchez" }) {
  return (
    <motion.h1
      initial='hidden'
      animate='visible'
      transition={{
        staggerChildren: 0.2,
      }}
      className='text-[14rem] font-normal mt-36 leading-[13rem] text-grotesk'
    >
      {text.split("").map((char, index) =>
        index === 6 ? (
          <br key={index} />
        ) : (
          <motion.span variants={defaultAnimations} key={`${char}-${index}`}>
            {char}
          </motion.span>
        )
      )}
    </motion.h1>
  );
}

export default Home;
