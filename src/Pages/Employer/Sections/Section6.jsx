import React from 'react'
import Button from '../../../Components/Button';
import { useNavigate } from "react-router-dom";

const Section6 = () => {
    let navigate = useNavigate();
    const handleClick = () => {
      navigate("/demo");
    };
  return (
    <>
      <div className=" sm:py-16 bg-white">
        <div className="container flex flex-col gap-4 sm:gap-8">
          <div className="font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl  md:leading-9 max-w-[600px] lg:leading-11  m-auto font-euclid-medium text-navy-900 text-center">
            Ready to start ?
          </div>
          <div className="text-xs sm:text-sm text-neutral-600 md:text-xl lg:max-w-[950px] text-center font-euclid-normal m-auto">
            Your employees are waiting, let’s help them get there.
          </div>
          <Button
            placeholder={"Let's go"}
            icon={"/icons/line.svg"}
            style={
              " m-auto bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-36 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
            }
            action={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default Section6