import React from 'react'
import { Card } from '../../../Components/Cards';

const Section2 = () => {
  return (
    <>
      <div className=" sm:py-16 bg-neutral-">
        <div className="container flex flex-col gap-4">
          <div className="font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl  md:leading-9 sm:max-w-screen-md lg:leading-11 lg:max-w-screen-lg m-auto font-euclid-medium text-navy-900 text-center">
            See your patients wherever they are.
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 md:text-xl lg:max-w-[600px] text-center font-euclid-normal m-auto">
            Remain competitive in this digital age with the most powerful
            modular healthtech stack for the future of virtual care.
          </div>
          <img
            src="/images/dash-2.png"
            className="block max-w-[1000] object-contain m-auto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card
              img={"/icons/circles.svg"}
              title={"See more patients in less time"}
              sub={`Help your patients find you and book appointments, capture their feedback, and consult online.`}
            />
            <Card
              img={"/icons/bound.svg"}
              title={`Go beyond geographical boundaries`}
              sub={`It’s time to see more patients beyond your facility, beyond your city and beyond your country.`}
            />
            <Card
              img={"/icons/revenue.svg"}
              title={`Increase revenue`}
              sub={`Move past traditional barriers, no shows and cancelations that will boost your revenue.`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2