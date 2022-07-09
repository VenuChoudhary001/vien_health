import React from "react";
import Button from "../../../Components/Button";
import {useNavigate} from 'react-router-dom'
const Section6 = () => {
   let navigate = useNavigate();
   const handleClick = () => {
     navigate("/demo");
   };
  return (
    <div className="bg-navy-900 py-16">
      <div className="container">
        <div className="flex text-white flex-col gap-5 md:gap-10">
          <div className="text-xl md:text-4xl lg:text-5xl text-center font-euclid-medium lg:max-w-screen-lg m-auto ">
            A single care platform that scales
          </div>
          <div className="text-sm md:text-xl lg:max-w-[600px] text-center font-euclid-light m-auto">
            Go from zero to one to deliver 24/7 virtual care services that your
            patients love.
          </div>

          <div className="grid  gap-10 plcae-items-center grid-cols-2 md:grid-cols-4 my-8">
            <div className="flex justify-between items-center flex-col ">
              <img
                src="/icons/whitelable.svg"
                className="block w-10 md:w-20 object-contain"
              />
              <div className="font-euclid-bold text-center lg:text-base text-xs">
                White
                <br />
                Labeled
              </div>
            </div>
            <div className="flex justify-between items-center flex-col gap-8">
              <img
                src="/icons/audiovideo.svg"
                className="block w-8 md:w-16 object-contain"
              />
              <div className="font-euclid-bold text-center lg:text-base text-xs">
                Audio & Video <br /> Visits
              </div>
            </div>{" "}
            <div className="flex justify-between items-center flex-col gap-8">
              <img
                src="/icons/pharma.svg"
                className="block w-8 md:w-16 object-contain"
              />
              <div className="font-euclid-bold text-center lg:text-base text-xs">
                Pharmacy & Lab <br /> Integration
              </div>
            </div>{" "}
            <div className="flex justify-center items-center flex-col gap-8">
              <img
                src="/icons/payment.svg"
                className="block w-10 md:w-20 object-contain"
              />
              <div className="font-euclid-bold text-center lg:text-base text-xs">
                Built-in <br />
                Payment
              </div>
            </div>
            <div className="flex justify-between items-center flex-col gap-8">
              <img src="/icons/msg.svg" className="block w-8 md:w-16 object-contain" />
              <div className="font-euclid-bold text-center lg:text-base text-xs">
                Text & Chat <br /> Messaging
              </div>
            </div>
            <div className="flex justify-between items-center flex-col gap-8">
              <img src="/icons/ehr.svg" className="block w-8 md:w-16 object-contain" />
              <div className="font-euclid-bold text-center lg:text-base text-xs">
                EHR & EMR <br /> Integration
              </div>
            </div>{" "}
            <div className="flex justify-between items-center flex-col gap-8">
              <img
                src="/icons/virtual_w_room.svg"
                className="block w-14 md:w-16 object-contain"
              />
              <div className="font-euclid-bold text-center lg:text-base text-xs">
                Virtual Waiting <br />
                Room
              </div>
            </div>{" "}
            <div className="flex justify-center items-center flex-col gap-8">
              <img
                src="/icons/complaint.svg"
                className="block w-6 md:w-12 object-contain"
              />
              <div className="font-euclid-bold text-center lg:text-base text-xs">
                HIPPA Complaint
                <br /> Document Sharing
              </div>
            </div>
          </div>

          <Button
            placeholder={"Request a demo"}
            icon={"/icons/line_black.svg"}
            style={
              "sm:w-48 w-36 m-auto mt-4 h-8 md:h-12 bg-white text-xs sm:text-sm text-neutral-800 flex gap-2 items-center justify-center font-euclid-medium rounded-lg"
            }
            action={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
