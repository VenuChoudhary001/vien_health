import React from 'react'

export const Card=({img,title,sub})=>{
    return (
      <>
        <div className="w-full p-4 border-[1px] border-neutral-200 rounded-lg flex flex-col gap-2">
          <img src={img} alt='' className="block w-10 object-contain" />
          <div className="text-xs sm:text-sm lg:text-base xl:text-lg text-navy-900 font-euclid-bold">
           {title}
          </div>
          <div className="text-xs lg:text-sm xl:text-base text-neutral-500">
           {sub}
          </div>
        </div>
      </>
    );
}

export const Card2=({title,img,info})=>{
  return (
    <>
      <div className="flex items-start gap-4">
        <img src={img} alt="" className="block max-w-[50px] lg:max-w-[80px] object-contain" />
        <div className="flex flex-col max-w-[600px] gap-4">
          <div className="text-navy-900 font-euclid-bold text-base lg:text-lg xl:text-xl">
           {title}
          </div>
          <div className="text-neutral-500 text-sm lg:text-base xl:text-lg font-euclid-normal">
            {info}
          </div>
        </div>
      </div>
    </>
  );
}