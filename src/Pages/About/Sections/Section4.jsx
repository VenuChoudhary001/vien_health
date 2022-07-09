import React from 'react'

const Section4 = () => {
  return (
    <>
      <div className="px-6  py-24 mb-24 mt-20   bg-neutral-100">
        <div className="container grid grid-cols-1 sm:grid-cols-2 grid gap-8  place-items-center">
          <img
            src="/images/founder.png"
            className="block sm:hidden w-full max-w-[500px]  m-auto object-contain"
          />
          <div className="flex flex-col w-full sm:max-w-[650px] m-auto gap-4 xl:gap-8 items-start">
            <div className="text-navy-900 font-euclid-bold text-xl sm:text-xl xl:text-5xl xl:leading-11">
              A FOUNDER’S VISION
            </div>
            <div className=" text-xs text-neutral-600  lg:text-base  font-euclid-normal">
              A Ghanaian-American, Inventor and humanitarian technologist,
              Gersom Adu founded Vien Health to shift the current delivery
              model. He’s an avid speaker and thought leader on the topics of
              telemedicine, digital health and healthcare practice models.<br/><br/> “When
              I envision the future of healthcare for Africa, it’s going to take
              all of us. Not only to imagine what’s possible, but perhaps more
              importantly to take action.”<br/><br/> <span className="font-euclid-bold">
                
                 - Gersom Adu
                </span>
            </div>

            
          </div>

          <img
            src="/images/founder.png"
            className="hidden sm:block w-full   m-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default Section4