import React from "react";
import BorderdLinks from "../BorderdLinks";

function Collaboration() {
  return (
    <section className='mt-20 flex items-center flex-col px-10'>
      <h1 className='text-green text-xl'>Collaboration</h1>
      <h1 className='text-8xl w-1/2 font-semibold text-center'>
        Let's talk to Collaboration
      </h1>

      <div className='flex gap-10 mt-10'>
        <BorderdLinks size='md' className='bg-green text-black border-none'>
          Get in Touch
        </BorderdLinks>

        <BorderdLinks size='md'>Hire me Now</BorderdLinks>
      </div>
    </section>
  );
}

export default Collaboration;
