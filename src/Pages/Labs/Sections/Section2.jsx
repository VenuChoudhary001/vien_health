import React from 'react'

const Section2 = () => {
  return (
    <>
      <div className=" sm:py-16 bg-neutral-50">
        <div className="container flex flex-col gap-4">
          <div className="font-bold text-lg sm:text-xl md:text-3xl lg:text-5xl  md:leading-9 sm:max-w-screen-md lg:leading-11 lg:max-w-screen-lg m-auto font-euclid-medium text-navy-900 text-center">
            Scale your lab services with confidence
          </div>
          <div className="text-xs sm:text-sm text-neutral-500 md:text-xl lg:max-w-[600px] text-center font-euclid-normal m-auto">
            Vien’s tech-enabled network of board-certified clinicians ensures
            lab test reviews and direct-to-consumer lab testing you and your
            customers can trust.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 place-items-center">
            <div className="flex shadow max-h-[200px] flex-col items-center justify-center text-center max-w-[300px] p-3 xl:p-6 gap-2 md:gap-6 bg-white rounded-lg">
              <img
                src="/images/money.png"
                className="block w-12 object-contain"
              />
              <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                Increase Revenue
              </div>
              <div className="text-xs lg:text-base font-euclid-medium text-neutral-600 ">
                Reduce no-show appointments. Maximize profit
              </div>
            </div>
            <div className="flex shadow max-h-[200px] flex-col items-center justify-center text-center max-w-[300px]   p-3 xl:p-6 gap-2 md:gap-6 bg-white rounded-lg">
              <img
                src="/images/sinyal.png"
                className="block w-12 object-contain"
              />
              <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                Wider Reach
              </div>
              <div className="text-xs lg:text-base font-euclid-medium text-neutral-600 ">
                Reach more patients beyond your geoprahical boundaries
              </div>
            </div>
            <div className="flex shadow max-h-[200px] flex-col items-center justify-center text-center max-w-[300px]   p-3 xl:p-6 gap-2 md:gap-6 bg-white rounded-lg">
              <img
                src="/images/time.png"
                className="block w-12 object-contain"
              />
              <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                Save Time
              </div>
              <div className="text-xs lg:text-base font-euclid-medium text-neutral-600 ">
                Eliminate traditional bariers to win every sale
              </div>
            </div>{" "}
            <div className="flex shadow flex-col max-h-[200px] items-center justify-center text-center max-w-[300px]   p-3 xl:p-6 gap-2 md:gap-6 bg-white rounded-lg">
              <img
                src="/images/acc.png"
                className="block w-12 object-contain"
              />
              <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                Trust
              </div>
              <div className="text-xs lg:text-base font-euclid-medium text-neutral-600 ">
                Build customer trust with a branded all-in-one platform
              </div>
            </div>{" "}
            <div className="flex shadow flex-col max-h-[200px] items-center justify-center text-center max-w-[300px]   p-3 xl:p-6 gap-2 md:gap-6 bg-white rounded-lg">
              <img
                src="/images/credit-card.png"
                className="block w-12 object-contain"
              />
              <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                Payment System
              </div>
              <div className="text-xs lg:text-base font-euclid-medium text-neutral-600 ">
                Building a business is hard. Getting paid shouldn't be.
              </div>
            </div>{" "}
            <div className="flex shadow flex-col max-h-[200px] items-center justify-center text-center max-w-[300px]   p-3 xl:p-6 gap-2 md:gap-4 bg-white rounded-lg">
              <img
                src="/images/ease.png"
                className="block w-12 object-contain"
              />
              <div className="font-euclid-bold text-navy-900 text-sm sm:text-lg">
                Simplest Process
              </div>
              <div className="text-xs lg:text-base font-euclid-medium text-neutral-600 ">
                One portal, one schedule, one application, one credentialing
                effort
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2