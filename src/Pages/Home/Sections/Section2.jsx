import React from 'react'
import Button from '../../../Components/Button';
import {useNavigate} from 'react-router-dom'
const Section2 = () => {
   let navigate = useNavigate();
   const handleClick = () => {
     navigate("/demo");
   };
  return (
    <div className="py-16 bg-neutral-100">
      <div className="container flex flex-col gap-12">
        <div className="font-bold text-xl md:text-3xl lg:text-5xl  md:leading-9 sm:max-w-screen-md lg:leading-11 lg:max-w-screen-lg m-auto font-euclid-medium text-navy-900 text-center">
          Everything hospitals and health systems need to deliver virtual care.
        </div>
        <div className="grid grid-cols-12 gap-4 place-items-center">
          <img
            src="/images/sec2_side-1.png"
            className="lg:block hidden col-span-5 w-full object-contain"
            lazy={"true"}
          />
          <div className="grid grid-rows col-span-12 lg:col-span-7 gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col max-w-[300px]  p-3 xl:p-6 gap-2 bg-white rounded-lg">
                <img
                  src="/icons/vcare.svg"
                  className="block w-14 object-contain"
                />
                <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                  Virtual Care
                </div>
                <div className="text-xs font-euclid-medium text-neutral-500 ">
                  White-labeled virtual care for your practice.
                </div>
              </div>
              <div className="flex flex-col max-w-[300px] p-3 xl:p-6 gap-2 bg-white rounded-lg">
                <img
                  src="/icons/lab.svg"
                  className="block w-10 object-contain"
                />
                <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                  Labs & Diagnostic
                </div>
                <div className="text-xs font-euclid-medium text-neutral-500 ">
                  Ease the burden on your team and improve efficiency and
                  workflow.
                </div>
              </div>
              <div className="flex flex-col max-w-[300px]  p-3 xl:p-6 gap-2 bg-white rounded-lg">
                <img
                  src="/icons/tech.svg"
                  className="block w-12 object-contain"
                />
                <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                  Technology
                </div>
                <div className="text-xs font-euclid-medium text-neutral-500 ">
                  Your bedrock of healthtech stack.
                </div>
              </div>
              <div className="flex flex-col max-w-[300px] p-3 xl:p-6 gap-2 bg-white rounded-lg">
                <img
                  src="/icons/partner.svg"
                  className="block w-12 object-contain"
                />
                <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                  Partnership
                </div>
                <div className="text-xs font-euclid-medium text-neutral-500 ">
                  Complete end-to-end support from a team of experts.
                </div>
              </div>
            </div>
            <Button
              placeholder={"Learn More"}
              style={
                "m-auto lg:m-0 bg-navy-900 text-xs sm:text-sm text-white font-medium px-6 max-w-max h-10 shadow rounded-lg"
              }
              action={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2