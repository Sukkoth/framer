import React from "react";
import BorderdLinks from "../BorderdLinks";

function Clients() {
  return (
    <div className='text-center mt-10 text-grotesk text-xl'>
      <h1 className='text-2xl'>Our Clients</h1>
      <p className='text-stone-400'>
        More than 30 clients who have worked with me
      </p>
      <ul className='mt-20'>
        <li>
          <BorderdLinks size='lg'>Google</BorderdLinks>
          <BorderdLinks size='lg'>Facebook</BorderdLinks>
          <BorderdLinks size='lg'>Yahoo</BorderdLinks>
          <BorderdLinks size='lg'>Amazon</BorderdLinks>
          <BorderdLinks size='lg'>Netflix</BorderdLinks>
        </li>
      </ul>
    </div>
  );
}

export default Clients;
