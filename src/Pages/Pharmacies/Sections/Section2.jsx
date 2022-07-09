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
      <div className=" sm:py-16 bg-neutral-50">
        <div className="container flex flex-col gap-8">
          <div className="font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl  md:leading-9 sm:max-w-screen-md lg:leading-11 lg:max-w-screen-lg m-auto font-euclid-medium text-navy-900 text-center">
            Scale your services beyond presciptions with a trusted partner
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 md:text-xl lg:max-w-[750px] text-center font-euclid-normal m-auto">
            Vien offers a broad range of partnership models to support
            pharmacies and retailers across the country as they go digital with
            virtual care integration. Through deep and collaborative
            partnerships, we are able to position your brand for a value-based
            and consumer-driven future.
          </div>
          <Button
            placeholder={"Let’s talk"}
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

export default Section2