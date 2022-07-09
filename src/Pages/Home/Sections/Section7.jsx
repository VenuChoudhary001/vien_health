import React from 'react'

const Section7 = () => {
  return (
    <div className="container">
      <div className="grid py-16 place-items-center grid-cols-12">
        <img src="/images/analysis.png" className="hidden sm:block col-span-7" />
   
        <div className="flex flex-col gap-8 col-span-12 md:col-span-5 justify-center items-start">
          <div className="font-euclid-medium text-navy-900 lg:max-w-[500px] text-2xl lg:text-5xl lg:leading-11 font-semibold">
            Your data has only one owner, YOU!
          </div>
          <div className="flex-col flex gap-3">
            <div className="flex gap-3 text-neutral-600 text-sm lg:text-xl items-center">
              <img
                src="/icons/tick.svg"
                alt=""
                className="w-6 lg:w-8 object-contain"
              />
              We do not have access to your data
            </div>
            <div className="flex gap-3 text-neutral-600 text-sm lg:text-xl items-center">
              <img
                src="/icons/tick.svg"
                alt=""
                className="w-6 lg:w-8 object-contain"
              />
              We follow regulatory security controls
            </div>{" "}
            <div className="flex gap-3 text-neutral-600 text-sm lg:text-xl items-center">
              <img
                src="/icons/tick.svg"
                alt=""
                className="w-6 lg:w-8 object-contain"
              />
              Practices cannot see each other’s data
            </div>{" "}
            <div className="flex gap-3 text-neutral-600 text-sm lg:text-xl items-center">
              <img
                src="/icons/tick.svg"
                alt=""
                className="w-6 lg:w-8 object-contain"
              />
              Data is NEVER shared with a third party
            </div>{" "}
            <div className="flex gap-3 text-neutral-600 text-sm lg:text-xl items-center">
              <img
                src="/icons/tick.svg"
                alt=""
                className="w-6 lg:w-8 object-contain"
              />
              We never send marketing promotions to your patients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7