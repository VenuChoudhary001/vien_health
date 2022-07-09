import React from 'react'
import Button from '../../../Components/Button';
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/demo");
  };
  return (
    <>
      <div className="bg-neutral-50 py-4 my-8 ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
            <div className="bg-2 flex justify-center gap-8 sm:items-center flex-col min-h-[200px] sm:min-h-[500px] lg:min-h-[700px]">
              <div className="text-center md:text-left text-xl md:text-3xl lg:leading-11 lg:text-5xl  xl:leading-11 font-euclid-bold xl:text-6xl text-navy-900">
                Healthier people.
                <br /> Healthier business.
              </div>
              <div className=" flex sm:hidden justify-center items-cente flex-col gap-8">
                <div className="text-center md:text-left text-neutral-600 font-euclid-normal text-sm lg:text-base xl:text-xl">
                  With enterprise-grade tools and professional support every
                  step of the way, our team will help you launch your program,
                  drive engagement, and measure outcomes — stress-free.
                </div>
                <Button
                  placeholder={"Book a demo"}
                  icon={"/icons/line.svg"}
                  style={
                    "m-auto md:m-0 bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-36 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
                  }
                  action={handleClick}
                />
              </div>
            </div>
            <div className="hidden sm:flex justify-center items-cente flex-col gap-8">
              <div className="text-neutral-600 font-euclid-normal text-sm lg:text-base xl:text-xl">
                With enterprise-grade tools and professional support every step
                of the way, our team will help you launch your program, drive
                engagement, and measure outcomes — stress-free.
              </div>
              <Button
                placeholder={"Book a demo"}
                icon={"/icons/line.svg"}
                style={
                  "  bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-36 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
                }
                action={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4