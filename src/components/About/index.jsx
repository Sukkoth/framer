import React from "react";
import BorderdLinks from "../BorderdLinks";
import Status from "./Status";

function About() {
  return (
    <section className='mt-32 px-20'>
      <h1 className='text-green text-xl'>About me</h1>
      <h1 className='text-6xl w-1/2 font-semibold'>
        I can deliver results that exceed your expectations
      </h1>
      <p className='mt-10'>
        <BorderdLinks size='md' className={"cursor-pointer"}>
          Hire Me Now -{">"}
        </BorderdLinks>
      </p>
      <div className='mt-10 flex items-end flex-col'>
        <p className='w-[40%] leading-9'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          ut, iure dolorem necessitatibus ad asperiores hic quam vero placeat
          accusantium vitae harum modi! Quia dicta accusantium modi minus beatae
          neque? Sit, sequi nemo cumque porro veritatis dicta accusantium,
          libero ullam ducimus totam, omnis molestiae dolorem alias. Ipsum,
          obcaecati provident, rerum modi ipsa atque eveniet accusantium quaerat
          nulla, saepe veniam assumenda! Reiciendis consequuntur illo quis odit?
          Beatae quidem natus facere et ut perspiciatis minus error rem alias
          quos maxime fugiat aspernatur nobis cumque doloremque culpa illo at
          nam, recusandae eius iste.
        </p>
        <ul className=' mt-8 w-[40%] flex justify-between pe-10'>
          <li>
            <Status />
          </li>
          <li>
            <Status />
          </li>
          <li>
            <Status />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
