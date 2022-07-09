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
      <div className="bg-navy-900 py-2 text-white">
        <div className="container">
          <div className="px-6 my-12 sm:my-24 py-8 grid grid-cols-1 sm:grid-cols-2 grid gap-8  items-end">
            <img
              src="/images/care_your.png"
              className="block w-full max-w-[500px]  m-auto object-contain"
              alt=''
            />
            <div className="flex flex-col max-w-[550px] m-auto gap-4 xl:gap-8 items-start">
              <div className=" font-euclid-bold text-lg sm:text-4xl xl:text-5xl xl:leading-11">
                Care your patients trust
              </div>
              <div className=" text-xs sm:text-base xl:text-xl font-euclid-normal">
                Providing a great virtual care experience is what separates you
                from your competitors. We make clinical quality a priority, so
                patients keep coming back to you for care.
              </div>

              <Button
                placeholder={"Work with us"}
                icon={"/icons/line.svg"}
                style={`flex gap-2 border-[1px] font-euclid-normal font-medium text-xs lg:text-base rounded-lg border-white items-center max-w-max h-10 lg:h-12 px-6 lg:px-10`}
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