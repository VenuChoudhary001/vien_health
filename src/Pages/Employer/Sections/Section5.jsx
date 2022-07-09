import React from "react";

const Section5 = () => {
    const data = [
      {
        title: "Virtual Care",
        sub: "24/7 on-demand care via Video/Audio or Chat",
      },
      {
        title: "Order Lab",
        sub: "Order lab via the mobile app and get doctor approved interpretation of lab results",
      },
      {
        title: "Prescription",
        sub: "Medications are sent electronically to the pharmacy choice of your members",
      },
    ];
  return (
    <>
      <div className="py-12 sm:py-36">
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="flex flex-col max-w-[500px] m-auto gap-8">
              <div className="text-navy-900  font-euclid-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl lg:leading-11">
                Membership benefits your team will enjoy
              </div>
              <div className="flex flex-col items-start gap-4 md:gap-8">
                {data.map((item, i) => (
                  <div
                    key={i + 21}
                    className="flex gap-2 md:gap-4 justify-start items-start"
                  >
                    <img
                      src="/icons/dots.svg"
                      alt=""
                      className="block max-w-[14px] md:max-w-[25px] lg:max-w-[40px] object-contain pt-1"
                    />
                    <div className="flex flex-col gap-1">
                      <div className="text-navy-900 font-euclid-bold text-base md:text-xl xl:text-2xl">
                        {item.title}
                      </div>
                      <div className="text-neutral-600 text-xs sm:text-sm md:text-base xl:text-lg">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img src="/images/side.png" alt="" className="hidden md:block object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
