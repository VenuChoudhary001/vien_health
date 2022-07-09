import React from 'react'
import Hero from '../../Components/Hero'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Section5 from './Sections/Section5'
import Section6 from './Sections/Section6'
import Section7 from './Sections/Section7'
import Section8 from './Sections/Section8'

const Home = () => {
    const title = (
      <>
        The future of <br /> telehealth is here
      </>
    );
  return (
    <>
      
        <Hero
          img={"/images/hero_side-1.png"}
          title={title}
          sub="Everything hospitals and health systems need to deliver anytime,
              anywhere virtual care."
          btnStyle={`flex gap-2 border-[1px] font-euclid-normal font-medium text-xs lg:text-base rounded-lg border-white items-center max-w-max h-10 lg:h-12 px-6 lg:px-10`}
        />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />

   
    </>
  );
}

export default Home