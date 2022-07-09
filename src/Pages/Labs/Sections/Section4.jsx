import React from 'react'

const Section4 = () => {
  return (
    <>
      <div className="bg-neutral-50 -mt-1">
        <div className="container">
          <div className="grid py-16 place-items-center grid-cols-12">
            <img
              src="/images/analysis-2.png"
              className="hidden sm:block col-span-7"
            />

            <div className="flex flex-col gap-6 col-span-12 md:col-span-5 justify-center items-start">
              <div className="font-euclid-medium text-navy-900 lg:max-w-[500px] text-xl sm:text-2xl lg:text-5xl lg:leading-11 font-semibold">
                Launch within days, not months
              </div>
              <div className="text-neutral-500 text-xs sm:text-base xl:text-xl font-euclid-normal">
                Whether you have an existing platform partner or are launching a
                new lab program, we make it easy to get your service up and
                running.
              </div>
              <div className="flex flex-col text-neutral-400 gap-4 text-xs sm:text-base pl-16">
                <ul className="list-disc">
                  <li>Modern APIs</li>
                  <li>Dedicated implementation team</li>
                  <li>On-going product adoption support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4