import React from "react";
import BorderdLinks from "../BorderdLinks";
import ItemContainer from "./ItemContainer";

import item1 from "../../assets/portfolio-items/portfolio-item-1.png";
import item2 from "../../assets/portfolio-items/portfolio-item-2.png";
import item3 from "../../assets/portfolio-items/portfolio-item-3.png";

function Portfolio() {
  return (
    <section className='mt-32 px-20'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-green text-xl'>About me</h1>
          <h1 className='text-6xl font-semibold'>
            Selected Works
            <br />
            2022-2023
          </h1>
        </div>
        <div>
          <p className='w-2/3 text-2xl'>
            Check out more portfolios I have worked on
          </p>
          <p className='mt-10'>
            <BorderdLinks size='md'>View More -{">"}</BorderdLinks>
          </p>
        </div>
      </div>
      {/* LIST STARTS */}
      <div className='flex mt-20 h-[32rem] gap-5'>
        <ItemContainer>
          <img src={item1} alt='item-1' className='h-full object-cover' />
        </ItemContainer>
        <ItemContainer>
          <img src={item2} alt='item-2' className='h-full object-cover' />
        </ItemContainer>
        <ItemContainer>
          <img src={item3} alt='item-3' className='h-full object-cover' />
        </ItemContainer>
      </div>

      {/* LIST ENDS */}
    </section>
  );
}

export default Portfolio;
