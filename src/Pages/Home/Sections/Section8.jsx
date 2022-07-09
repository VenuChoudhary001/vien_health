import React from 'react'
import Button from '../../../Components/Button';
import {useNavigate} from 'react-router-dom'
const Section8 = () => {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate('/contact')
  }
  return (
    <div className="bg-neutral-100  relative overflo">
      <div className="container ">
        <div className="grid  grid-cols-6">
          <div className=" col-span-5 md:col-span-4 z-40 min-h-[300px] md:min-h-[600px] flex gap-12 justify-center h-full flex-col">
            <div className="text-navy-900 text-xl font-euclid-bold md:leading-10 sm:text-4xl lg:text-6xl lg:leading-11">
              Your patients are waiting, let’s help you move fast.
            </div>
            <Button
              placeholder={"Contact us"}
              style={
                " cursor-pointer bg-navy-900 text-white font-euclid-medium sm:text-sm text-xs w-32 h-8 sm:w-40 sm:h-12 shadow rounded-lg"
              }
              action={handleClick}
            />
          </div>
        </div>
      </div>
      <img
      src='/images/dr_bg.png'
      className='absolute top-0   right-0 lg:right-20 h-full object-cover'
      />
    </div>
  );
}

export default Section8