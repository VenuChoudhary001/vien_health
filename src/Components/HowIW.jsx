import React from 'react'

const Section5 = () => {
  return (
    <div className="container  ">
      <div className="flex flex-col items-center justify-center gap-4 sm:mb-12">
        <div className="font-eucldi-medium font-semibold text-navy-900 text-xl md:text-5xl text-center">
          How it Works
        </div>
        <div className="text-neutral-500 text-base md:text-lg text-center font-euclid-normal">
          Make it truly yours. Uniqueness in as little as 2 weeks.
        </div>
      </div>
      <div className="grid place-items-center mt-16 sm:mt-32 grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center  text-center max-w-[280px] m-auto flex-col gap-4">
          <div className="text-sky-400 text-xl   font-euclid-medium">1</div>
          <div className="text-navy-900 font-euclid-medium text-xl">
            Identify
          </div>
          <div className="text-navy-500 font-euclid-medium text-xs lg:text-sm xl:text-base">
            Based on the experience you want to deliver, we'll help you choose
            the right plan that fits your clinical protocols and workflows to
            ensure quality patient care is on point.
          </div>
        </div>
        <div className="flex items-center  text-center max-w-[280px] m-auto flex-col gap-4">
          <div className="text-sky-400 text-xl font-euclid-medium">2</div>

          <div className="text-navy-900 font-euclid-medium text-xl">Select</div>
          <div className="text-navy-500 font-euclid-medium text-xs lg:text-sm xl:text-base">
            Share the type of coverage you need and we’ll train the right number
            of licensed clinicians on your brand of care, scaling to meet your
            needs as you grow.
          </div>
        </div>
        <div className="flex items-center  text-center max-w-[280px] m-auto flex-col gap-4">
          <div className="text-sky-400 text-xl font-euclid-medium">3</div>

          <div className="text-navy-900 font-euclid-medium text-xl">
            Integrate
          </div>
          <div className="text-navy-500 font-euclid-medium text-xs lg:text-sm xl:text-base">
            Select the option that's best for you. Access our clinician network
            with your existing platform via API, or leverage our
            clinician-integrated virtual care platform.
          </div>
        </div>
        <div className="flex items-center  text-center max-w-[280px] m-auto flex-col gap-4">
          <div className="text-sky-400 text-xl font-euclid-medium">4</div>

          <div className="text-navy-900 font-euclid-medium text-xl">Launch</div>
          <div className="text-navy-500 font-euclid-medium text-xs lg:text-sm xl:text-base">
            Get your brand of care to market fast — within weeks, not years.
            With our clinical workforce and telehealth technology at the ready,
            all you bring is your brand.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 my-8 gap-8"></div>
    </div>
  );
}

export default Section5