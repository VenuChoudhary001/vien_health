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
      <div className="py-4 bg-navy-900 lg:py-16">
        <div className="container flex items-center flex-col gap-2 lg:gap-8">
          <div className="text-white w-full flex items-center  min-h-[100px] font-euclid-medium max-w-max text-xl md:text-3xl  lg:text-5xl m-auto text-center ">
            Out with the old, in with the new
          </div>
          <Button
            placeholder={`Let’s talk`}
            icon={"/icons/line_black.svg"}
            style={
              "sm:w-48 w-36  h-8 md:h-10 bg-white text-xs sm:text-sm text-neutral-800 flex gap-2 items-center justify-center font-euclid-medium rounded-lg"
            }
            action={handleClick}
          />
        </div>
      </div>
      <div className="relative bg-neutral-50 min-h-[700px] -z-[1]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" flex flex-col text-center sm:text-left sm:min-h-[300px] mt-5 sm:my-8 justify-center items-center text-navy-900 font-euclid-bold text-lg sm:text-4xl xl:text-5xl xl:leading-11">
            Perfectly engineered for lab facilities in emerging markets.
          </div>

          <img
            src="/images/engi.png"
            alt=""
            className="hidden sm:block absolute max-w-[400px] lg:max-w-[700px] object-contain top-0 right-0 z-[1]"
          />
        </div>
        <div className="container ">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="grid z-30 gap-8 grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col gap-8">
                <div className="bg-white flex p-4  shadow-lg flex-col gap-4">
                  <div className="text-navy-900 font-euclid-bold text-base md:text-xl">
                    Operation
                  </div>
                  <div className="text-neutral-500 text-sm md:text-lg">
                    Eliminate operational burdens with a single solution that
                    provides end-to-end program management
                  </div>
                </div>
                <div className="bg-white flex p-4  shadow-lg flex-col gap-4">
                  <div className="text-navy-900 font-euclid-bold text-base md:text-xl">
                    Experience
                  </div>
                  <div className="text-neutral-500 text-sm md:text-lg">
                    Omnichannel engagement capabilities and consumer-friendly
                    platform.
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:my-16 gap-8">
                <div className="bg-white flex p-4 shadow-lg flex-col gap-4">
                  <div className="text-navy-900 font-euclid-bold text-base md:text-xl">
                    Technology
                  </div>
                  <div className="text-neutral-500 text-sm md:text-lg">
                    Go to market faster with a platform that grows as you grow
                    your customer base
                  </div>
                </div>
                <div className="bg-white flex p-4 shadow-lg flex-col gap-4">
                  <div className="text-navy-900 font-euclid-bold text-base md:text-xl">
                    Transform
                  </div>
                  <div className="text-neutral-500 text-sm md:text-lg">
                    Increase compliance rates and member satisfaction through
                    innovative digital engagement capabilities
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5