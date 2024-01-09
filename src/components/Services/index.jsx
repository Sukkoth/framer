import BorderdLinks from "../BorderdLinks";
import { motion } from "framer-motion";

const defaultAnimations = {
  hidden: {
    opactiy: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Services() {
  return (
    <section className='mt-20 text-center px-10'>
      <h1 className='text-green text-xl'>Service</h1>
      <motion.h1
        initial='hidden'
        animate='visible'
        transition={{ staggerChildren: 0.9 }}
        className='text-6xl font-semibold'
      >
        {"Available Services that I can work on"
          .split("")
          .map((char, index) => (
            <motion.span variants={defaultAnimations} key={`${char}-${index}`}>
              {char}
            </motion.span>
          ))}
      </motion.h1>

      {/* LIST START */}
      <section className='space-y-32'>
        <div className='text-start mt-10 flex flex-col gap-7'>
          <h2 className='text-4xl font-semibold'>
            <span className='text-green'>01.</span> Design Visual
          </h2>
          <p className='w-1/2 text-stone-400 self-end'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            necessitatibus reprehenderit rem labore, vitae consequatur aliquam
            culpa nesciunt et sapiente laudantium. Quaerat adipisci aspernatur
            ullam qui facere nostrum neque ex? Nam inventore rem ratione
            similique aspernatur aut necessitatibus numquam consequuntur,
            suscipit odit minima. Doloribus aliquid debitis accusamus reiciendis
            modi quidem eius nisi adipisci blanditiis ipsam. Reiciendis incidunt
            labore cupiditate voluptatibus?
          </p>
          <ul className='mt-20 self-center'>
            <li>
              <BorderdLinks size='xl'>UI/UX Design</BorderdLinks>
              <BorderdLinks size='xl'>Mockup Design</BorderdLinks>
              <BorderdLinks size='xl'>Design Graphics</BorderdLinks>
              <BorderdLinks size='xl'>Iocn Design</BorderdLinks>
              <BorderdLinks size='xl'>Logo Design</BorderdLinks>
            </li>
          </ul>
        </div>
        <div className='text-start mt-10 flex flex-col gap-7'>
          <h2 className='text-4xl font-semibold'>
            <span className='text-green'>02.</span> Development
          </h2>
          <p className='w-1/2 text-stone-400 self-end'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            necessitatibus reprehenderit rem labore, vitae consequatur aliquam
            culpa nesciunt et sapiente laudantium. Quaerat adipisci aspernatur
            ullam qui facere nostrum neque ex? Nam inventore rem ratione
            similique aspernatur aut necessitatibus numquam consequuntur,
            suscipit odit minima.
          </p>
          <ul className='mt-20 self-center'>
            <li>
              <BorderdLinks size='xl'>IOS </BorderdLinks>
              <BorderdLinks size='xl'>Website </BorderdLinks>
              <BorderdLinks size='xl'>Android </BorderdLinks>
              <BorderdLinks size='xl'>Backend </BorderdLinks>
              <BorderdLinks size='xl'>Webflow </BorderdLinks>
            </li>
          </ul>
        </div>
      </section>
      {/* LIST END */}
    </section>
  );
}

export default Services;
