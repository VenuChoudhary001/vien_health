import React from 'react'

const Section4 = () => {
  return (
    <>
      <div className="py-4 lg:py-16">
        <div className="container">
          <div className="text-navy-900 w-full flex items-center  min-h-[100px] font-euclid-medium font-semibold max-w-max text-xl md:text-3xl  lg:text-5xl m-auto text-center ">
            Customers trust us because we only trust the best
          </div>
        </div>
      </div>
      <div className="bg-navy-900 py-2">
        <div className="container grid grid-cols-2 gap-8 md:grid-cols-4 place-items-center">
          <img src="/images/ms.png" className="block  object-contain " />
          <img src="/images/twillio.png" className="block object-contain " />
          <img src="/images/aws.png" className="block w-24 md:w-32 lg:w-36 xl:w-auto object-contain " />
          <img src="/images/onevalley.png" className="block object-contain " />
        </div>
      </div>
    </>
  );
}

export default Section4