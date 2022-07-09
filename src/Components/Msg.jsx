import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
const Msg = ({title,placeholder}) => {
  let navigate=useNavigate()
  const handleClick=()=>{
    navigate('/demo')
  }
  return (
    <>
      <div className="relative bg  sm:my-32 py-">
        <div className="container z-[2] min-h-[200px]  flex flex-col  justify-center items-center ">
          <div className="max-w-[700px] m-auto text-center font-euclid-bold text-navy-900 text-xl sm:text-5xl sm:leading-11">
           {title}
          </div>
          <Button
            placeholder={placeholder}
            icon={"/icons/line.svg"}
            style={
              " lg:m-0 bg-navy-900 cursor-pointer flex gap-2 items-center justify-center text-white text-xs sm:text-sm font-euclid-medium w-36 h-8 sm:w-40 sm:h-10 shadow  rounded-lg"
            }
            action={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default Msg