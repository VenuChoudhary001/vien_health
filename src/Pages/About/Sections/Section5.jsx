import React from 'react'
import Button from '../../../Components/Button';
import {useNavigate} from 'react-router-dom'
const Section5 = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <div className="py-4 ">
        <div className="container">
          <div className="text-navy-900 w-full flex items-center  min-h-[100px] font-euclid-medium font-semibold max-w-max text-xl md:text-3xl  lg:text-5xl m-auto text-center ">
            Vien Health in the news{" "}
          </div>
        </div>
      </div>
      <div className="bg-navy-900 py-2">
        <div className="container grid grid-cols-2 gap-8 md:grid-cols-4 place-items-center">
          <img alt='' src="/images/ms.png" className="block  object-contain " />
          <img alt='' src="/images/twillio.png" className="block object-contain " />
          <img alt=''
            src="/images/aws.png"
            className="block w-24 md:w-32 lg:w-36 xl:w-auto object-contain "
          />
          <img alt='' src="/images/onevalley.png" className="block object-contain " />
        </div>
      </div>
      <div className="px-6  py-24 mb-24  bg-neutral-100">
        <div className="container grid grid-cols-1 sm:grid-cols-2 grid gap-8  place-items-center">
          <img alt=''
            src="/images/gc.png"
            className="block  w-full max-w-[500px]  m-auto object-contain"
          />
          <div className="flex flex-col w-full sm:max-w-[650px] m-auto gap-4 xl:gap-8 items-start">
            <div className="text-navy-900 font-euclid-bold text-xl sm:text-2xl lg:text-3xl xl:text-5xl xl:leading-11">
              Let’s put great care within everyone’s reach.
            </div>
            <Button
              placeholder={"Contact us"}
              action={handleClick}
              style={
                "  bg-navy-900 flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-28 h-8 xl:w-32 xl:h-10 shadow  rounded-lg"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5