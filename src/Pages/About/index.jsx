import React from 'react'
import Hero from '../../Components/Hero';
import Video from '../../Components/Video';
import Section2 from './Sections/Section2';
import Section4 from './Sections/Section4';
import Section5 from './Sections/Section5';
import Section6 from './Sections/Section6';
const About = () => {
  return (
    <>
      <Hero
        img={"/images/hero_side-5.png"}
        title="A new operating 
system in virtual care"
        sub="Imagine a future without waiting rooms, we’re on a mission to provide early access and better outcomes in healthcare for Africa."
        btnStyle={`flex gap-2 border-[1px] font-euclid-normal font-medium text-xs lg:text-base rounded-lg border-white items-center max-w-max h-10 lg:h-12 px-6 lg:px-10`}
      />
      <Section2/>
      <Video img={'/images/ip.png'} link={'/video/yt-1.mp4'}/>
      <Section4/>
      <Section5/>
      <Section6/>
  
    </>
  );
}

export default About