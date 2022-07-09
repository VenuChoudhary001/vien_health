import React from 'react'
import Button from '../../../Components/Button';
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/demo");
  };
  return (
    <div className="px-6 my-12 sm:my-24 py-8 grid grid-cols-1 sm:grid-cols-2 grid gap-4 place-items-center">
      <img
        src="/images/sec4_side-2.png"
        className="block w-full object-contain"
        alt=''
      />
      <div className="flex flex-col max-w-[450px] gap-4 xl:gap-8 items-start">
        <div className="flex gap-8 items-center justify-center">
          <div className="h-[3px] w-24 bg-neutral-400"></div>
          <div className="text-neutral-400 text-sm sm:text-base xl:text-lg italic font-euclid-normal">
            Your next advantage
          </div>
        </div>
        <div className="text-navy-900 font-euclid-bold text-lg sm:text-4xl xl:text-5xl xl:leading-11">
          Partners, never competitors
        </div>
        <div className="text-neutral-500 text-xs sm:text-base xl:text-xl font-euclid-normal">
          As a white-labeled solution without a patient front door, Vien never
          competes for your customers. Instead, we empower our clinician network
          to act independently and always put your customers’ needs first.
        </div>
        <div className="grid grid-cols-2 gap-4 xl:gap-8">
          <div className="flex gap-2 sm:gap-4 items-center">
            <img src="/icons/correct.svg" className="block" alt='' />
            <div className="text-xs sm:text-sm xl:text-base text-navy-900 font-euclid-bold">
              Collaborative
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <img src="/icons/correct.svg" className="block" alt=''/>
            <div className="text-xs sm:text-sm xl:text-base text-navy-900 font-euclid-bold">
              Mission driven
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <img src="/icons/correct.svg" alt='' className="block" />
            <div className="text-xs sm:text-sm xl:text-base text-navy-900 font-euclid-bold">
              Inclusive
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <img src="/icons/correct.svg" alt='' className="block" />
            <div className="text-xs sm:text-sm xl:text-base text-navy-900 font-euclid-bold">
              Further together
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <img src="/icons/correct.svg" alt='' className="block" />
            <div className="text-xs sm:text-sm xl:text-base text-navy-900 font-euclid-bold">
              Trusted
            </div>
          </div>
        </div>
        <Button
          placeholder={"Get started"}
          icon={"/icons/line.svg"}
          style={
            " lg:m-0 bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-32 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
          }
          action={handleClick}
        />
      </div>
    </div>
  );
}

export default Section4