import React from 'react'
import Button from '../../../Components/Button'
import {useNavigate} from 'react-router-dom'
const Section6 = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    window.location.replace("https://vienhealth.freshteam.com/jobs");
  };
  return (
    <>
      <div className="my-4 py-8">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-16">
            <div className="text-navy-900 flex flex-col gap-4 items-center font-euclid-bold sm:text-2xl lg:text-3xl xl:text-5xl">
              Join our team
              <Button
                placeholder={"Careers"}
                icon={"/icons/line.svg"}
                style={
                  "  bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-32 h-8 xl:w-40 xl:h-10 shadow  rounded-lg"
                }
                action={handleClick}
              />
            </div>
            <div className="grid grid-cols-1 px-6 sm:px-0 sm:grid-cols-3 gap-8">
              <img
                src="/images/5-1.png"
                alt=""
                className="block  object-contain"
              />
              <img
                src="/images/5-2.png"
                alt=""
                className="block  object-contain"
              />
              <img
                src="/images/5-3.png"
                alt=""
                className="block  object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section6