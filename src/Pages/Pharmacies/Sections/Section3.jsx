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
      <div className="px-6 my-12 sm:my-24 py-8 grid grid-cols-1 sm:grid-cols-2 grid gap-8  items-end">
        <img
          src="/images/gtm.png"
          className="block w-full max-w-[500px]  m-auto object-contain"
        />
        <div className="flex  flex-col max-w-[550px] m-auto gap-4 xl:gap-8 items-start">
          <div className="text-navy-900 font-euclid-bold text-lg sm:text-4xl xl:text-5xl xl:leading-11">
            Go to market in rapid speed
          </div>
          <div className=" text-neutral-500 text-xs sm:text-base xl:text-xl font-euclid-normal">
            Accelerate the launch of your telemedicine offering or rapidly
            expand your existing services. Vien health can help you start
            serving patients as fast as in 3 days. As your business evolves, so
            does our solution. Set your own price and integrate additional
            clinical services and technology features as you scale.
          </div>

          <Button
            placeholder={"Get started"}
            icon={"/icons/line.svg"}
            style={
              "m-0 bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-32 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
            }
            action={handleClick}
          />
        </div>
      </div>
      <div className="py-4 mb-12 sm:py-8">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-8">
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/secure.png"
              className="block w-8 sm:w-16 object-contain"
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-lg text-xs">
              Secure & fast
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/compliance.png"
              className="block w-8 sm:w-16 object-contain"
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-lg text-xs">
              Compliance solutions
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/react-blu.png"
              className="block w-8 sm:w-16 object-contain"
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-lg text-xs">
              Proven technology
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/ok.png"
              className="block w-8 sm:w-16 object-contain"
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-lg text-xs">
              Customer satisfaction
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3