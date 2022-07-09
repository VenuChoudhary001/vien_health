import React from 'react'
import Hero from '../../Components/Hero'
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import HowIW from '../../Components/HowIW'
import Msg from '../../Components/Msg';
const Pharmacies = () => {
  return (
    <>
      <Hero
        img={"/images/hero_side-4.png"}
        title="Comprehensive virtual care for pharmacies"
        sub="Healthcare industry is changing, it’s about that time you change too. If you’re ready to strengthen your value for your customers, it’s time to talk to Vien Health. "
        btnStyle={`flex gap-2 border-[1px] font-euclid-normal font-medium text-xs lg:text-base rounded-lg border-white items-center max-w-max h-10 lg:h-12 px-6 lg:px-10`}
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <HowIW />
      <Msg
        title={`Your customers are waiting, lets help you move fast.`}
        placeholder={`Free demo`}
      />

    </>
  );
}

export default Pharmacies