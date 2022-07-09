import React from 'react'

import Hero from '../../Components/Hero'
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Msg from '../../Components/Msg';

const Labs = () => {
  return (
    <>
      <Hero
        img={"/images/hero_side-3.png"}
        title={`Deliver consumer-friendly lab testing at scale`}
        sub={`Access fast, reliable platform for lab orders and approvals, test interpretation, and hiqh-quality, flexible follow-up care.`}
        btnStyle={
          "sm:w-48 w-36  mt-4 h-8 md:h-12 bg-white text-xs sm:text-sm text-neutral-800 flex gap-2 items-center justify-center font-euclid-medium rounded-lg"
        }
        icon={"/icons/line_black.svg"}
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Msg
        title={` It’s easy to get started. Get a live demo today!`}
        placeholder={`Free demo`}
      />

    </>
  );
}

export default Labs