import React from 'react'

const Section3 = () => {
  return (
    <>
      <div className="sm:py-4 lg:pb-12">
        <div className="container flex flex-col sm:gap-4">
          <div className="text-navy-900 w-full flex items-center  min-h-[100px] font-euclid-medium font-semibold max-w-max text-lg sm:text-xl md:text-3xl  lg:text-5xl m-auto text-center ">
            Better, from the start
          </div>
          <img src="/images/ip.png" className="w-full object-cover" alt="" />
        </div>
      </div>
      <div className="sm:py-8">

      <div className=" container flex flex-col gap-6">
        <div className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl  md:leading-9 sm:max lg:leading-11 lg:max-w-screen-lg m-auto font-euclid-medium text-navy-900 text-center">
          Expand with value, scale with speed and flexibility
        </div>
        <div className="text-xs sm:text-sm text-neutral-500 md:text-xl lg:max-w-[800px] text-center font-euclid-normal m-auto">
          Building a nationwide virtual care service is expensive, slow and
          complicated. Reach is the all-in-one solution for hospital and health
          systems to achieve fast, flexible growth.
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 sm:gap-24 lg:gap-32 mt-12  mx-auto">
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/rapid.png"
              className="block w-12 object-contain"
              alt=''
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-base text-xs">
              Rapid implementation
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/secure.png"
              className="block w-12 object-contain"
              alt=''
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-base text-xs">
              Secured and fast
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/compliance.png"
              className="block w-12 object-contain"
              alt=''
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-base text-xs">
              Compliance backbone
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/cloud.png"
              className="block w-12 object-contain"
              alt=''
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-base text-xs">
              Cloud first
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/react.png"
              className="block w-12 object-contain"
              alt=''
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-base text-xs">
              Proven Technology
            </div>
          </div>
          <div className="flex flex-col  items-center justify-between gap-3">
            <img
              src="/images/satis.png"
              className="block w-12 object-contain"
              alt=''
            />
            <div className="font-euclid-bold text-navy-900 text-center lg:text-base text-xs">
              99.99% satisfaction
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Section3