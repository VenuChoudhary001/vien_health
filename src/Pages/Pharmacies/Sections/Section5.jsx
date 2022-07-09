import React from 'react'
import Button from '../../../Components/Button';
import { useNavigate } from "react-router-dom";

const Section5 = () => {
   let navigate = useNavigate();
   const handleClick = () => {
     navigate("/demo");
   };
  return (
    <>
      <div className="px-6 -mt-24  py-24 mb-24  bg-neutral-100">
        <div className="container grid grid-cols-1 sm:grid-cols-2 grid gap-8  items-end">
          <img
            src="/images/video.png"
            className="block sm:hidden w-full max-w-[500px]  m-auto object-contain"
            alt=''
          />
          <div className="flex flex-col w-full sm:max-w-[450px] m-auto gap-4 xl:gap-8 items-start">
            <div className="text-navy-900 font-euclid-bold text-xl sm:text-4xl xl:text-5xl xl:leading-11">
              Partners, never competitors
            </div>
            <div className=" text-xs text-navy-900 sm:text-base xl:text-xl font-euclid-normal">
              Vien never competes for your customers. Instead, we empower our
              clinician network to act independently and always put your
              customers’ needs first.
            </div>

            <Button
              placeholder={"Let’s work together"}
              icon={"/icons/line.svg"}
              style={
                " lg:m-0 bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-40 h-8 sm:w-60 sm:h-10 shadow  rounded-lg"
              }
              action={handleClick}
            />
          </div>

          <img
            src="/images/video.png"
            alt=''
            className="hidden sm:block w-full max-w-[500px]  m-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default Section5