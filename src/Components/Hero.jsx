import Button from './Button'
import React from 'react'
import {useNavigate} from 'react-router-dom'
const Hero = ({img,title,sub,btnStyle,icon}) => {
  let navigate=useNavigate()
  const handleClick=()=>{
    navigate('/demo')
  }
  return (
    <div className="w-full border-t-[1px]  h-[600px] xl:h-[650px] border-white -mt-[1px] bg-navy-900 text-white ">
      <div className="container h-full">
        <div className="grid grid-cols-1 h-full gap-6 sm:gap-0 sm:grid-cols-2 place-items-center">
          <img
            src={img}
            className="sm:hidden block h-full object-contain max-w-[300px]"
            alt=''
          />

          <div className="flex flex-col items-center sm:items-start gap-4 sm:gap-8">
            <div className="font-euclid-bold text-2xl text-center sm:text-left md:text-4xl lg:text-3xl xl:text-6xl lg:leading-9 xl:leading-11 2xl:leading-12 2xl:text-6xl">
              {title}
            </div>
            <div className="text-sm lg:text-lg max-w-[600px]  text-center sm:text-left  font-euclid-normal">
              {sub}
            </div>
            <Button
              placeholder="Book a demo"
              icon={icon || "/icons/line.svg"}
              style={
                btnStyle
              }
              action={handleClick}
            />
          </div>
          <img
            src={img}
            className="hidden sm:block md:max-w-[300px] lg:max-w-[450px] xl:max-w-[580px]  object-contain"
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Hero