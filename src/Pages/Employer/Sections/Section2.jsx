import React from 'react'
import Button from '../../../Components/Button';
import { useNavigate } from "react-router-dom";

const Section2 = () => {
   let navigate = useNavigate();
   const handleClick = () => {
     navigate("/demo");
   };
  return (
    <>
      <div className="py-8 sm:py-16 bg-neutral-50">
        <div className="container flex flex-col gap-8">
          <div className="font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl  md:leading-9 sm:max-w-screen-md lg:leading-11 lg:max-w-screen-lg m-auto font-euclid-medium text-navy-900 text-center">
            Reduce turnover, prevent burnout and improve your team's morale
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 md:text-xl lg:max-w-[750px] text-center font-euclid-normal m-auto">
            Telehealth services are no longer a nice-to-have benefit, employees
            now consider this a standard offering. Let’s help you to deliver
            primary and behavioral health care services your employees expect
          </div>
          <Button
            action={handleClick}
            placeholder={"Get started"}
            icon={"/icons/line.svg"}
            style={
              " m-auto bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-36 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Section2