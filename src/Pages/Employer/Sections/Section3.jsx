import React from 'react'
import Button from '../../../Components/Button';
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/demo");
  };
  return (
    <>
      <div className="px-6 bg-white my-12 sm:my-24 py-8 grid grid-cols-1 sm:grid-cols-2 grid gap-8  items-end">
        <img
          src="/images/cmp.png"
          className="block w-full max-w-[500px]  m-auto object-contain"
        />
        <div className="flex   flex-col max-w-[550px] m-auto gap-4 xl:gap-8 items-start">
          <div className="text-center md:text-left text-navy-900 font-euclid-bold text-lg sm:text-xl md:text-3xl xl:text-5xl xl:leading-11">
            Build a company culture that values positive mental health
          </div>
          <div className="text-center md:text-left text-neutral-500 text-xs sm:text-base xl:text-xl font-euclid-normal">
            Strengthen your value for your members with a proven door and
            scalable, high-quality telehealth services they will love.
          </div>

          <Button
            placeholder={"Get started"}
            icon={"/icons/line.svg"}
            style={
              "m-auto sm:m-0 bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-32 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
            }
            action={handleClick}
          />
        </div>
      </div>
      <div className=" sm:py-16 bg-white">
        <div className="container flex flex-col gap-8">
          <div className="font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl  md:leading-9 max-w-[450px] lg:max-w-[600px] lg:leading-11  m-auto font-euclid-medium text-navy-900 text-center">
            Accessibility and quality - just a click away
          </div>
          <div className="text-xs sm:text-sm text-neutral-600 md:text-xl lg:max-w-[950px] text-center font-euclid-normal m-auto">
            Our virtual solutions platform connects your members to a wide array
            of specialized services that they can access anytime, anywhere, on
            any device.
          </div>
          <Button
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

export default Section3