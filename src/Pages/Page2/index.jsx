import React from 'react'

import Hero from '../../Components/Hero';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from '../../Components/HowIW';
import Msg from '../../Components/Msg';
const Page2 = () => {
  return (
    <>
      <Hero
        img={"/images/hero_side-2.png"}
        title="Deliver next-generation virtual care."
        sub="Go from zero to one to deliver 24/7 virtual care services  through video, voice or chat. "
        btnStyle={`flex gap-2 border-[1px] font-euclid-normal font-medium text-xs lg:text-base rounded-lg border-white items-center max-w-max h-10 lg:h-12 px-6 lg:px-10`}
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Msg
        title={` Let’s help you remove traditional barriers of care.`}
        placeholder={`Get started`}
      />

    </>
  );
}

export default Page2