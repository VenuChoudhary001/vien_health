import React from 'react'
import Button from '../../../Components/Button';
import {useNavigate} from 'react-router-dom'
const Section5 = () => {
   let navigate = useNavigate();
   const handleClick = () => {
     navigate("/demo");
   };
  return (
    <>
      <div className="mt-12 py-10 sm:py-20  relative bg-neutral-100">
        <div className="container">
          <div className="grid grid-cols-6">
            <div className="flex flex-col col-span-6 z-[2] md:col-span-4 gap-4 sm:gap-10 ">
              <img
                src="/images/appoint_card.png"
                className="hidden md:block max-w-max m-auto max-h-max  shadow-2xl object-contain"
              />
              <div className="text-navy-900 text-xl font-euclid-medium font-semibold md:leading-11  max-w-[400px] md:text-5xl">
                Best-in-class scheduling system
              </div>
              <div className="text-xs md:text-xl md:leading-7 max-w-[600px] font-euclid-normal text-neutral-600">
                Automate key patient touchpoints and streamline workflows for
                all visit types to create a 5-star-worthy patient experience.
              </div>
              <Button
                placeholder={"Learn More"}
                style={
                  " lg:m-0 bg-navy-900 text-white text-xs sm:text-sm font-euclid-medium w-24 h-8 sm:w-36 sm:h-10 shadow  rounded-lg"
                }
                action={handleClick}
              />
            </div>
          </div>
        </div>
            <img
            src='/images/aps.png'
            className='hidden sm:block absolute top-5 right-0 max-w-[400px] object-cover lg:max-w-[600px]'
            />
      </div>
    </>
  );
}

export default Section5