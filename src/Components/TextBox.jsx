import React from 'react'

const TextBox = ({lable,placeholder,action,type,value}) => {
  return (
    <>
    <div className="flex flex-col gap-1">
        <div className="text-xs text-neutral-600 font-euclid-bold">{lable}</div>
        <input 
        type={type || "text"} 
        placeholder={placeholder} 
        value={value}
        onChange={action} 
        className="outline-none p-3  font-euclid-bold text-navy-500 text-sm rounded-lg bg-transparent border-[1px] border-neutral-300" />
    </div>
    </>
  )
}


export const TextArea = ({ lable, placeholder, action, type, value }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="text-xs text-neutral-600 font-euclid-bold">{lable}</div>
        <textarea
          type={type || "text"}
          placeholder={placeholder}
          value={value}
          onChange={action}
          className="outline-none p-3  font-euclid-bold text-navy-500 text-sm rounded-lg bg-transparent border-[1px] border-neutral-300"
          rows={5}
          
        />
      </div>
    </>
  );
};


export const DropDown = ({ dropSelect,dropLable,lable, placeholder, action, type, value,list,maxLen }) => {
    const [show,setShow]=React.useState(false)
    const [dropDefault,setDropDefault]=React.useState(dropLable)
  return (
    <>
      <div className="flex flex-col gap-1 w-full">
        <div className="text-xs text-neutral-600 font-euclid-bold">{lable}</div>
        <div className="flex border-[1px] w-full border-neutral-300 rounded-lg">
          <div className="flex relative items-center text-neutral-500 justify-center px-3 border-r-[1px] border-r-neutral-300 font-euclid-bold text-sm gap-3">
            {dropDefault}
            <img
              src="/icons/cheveron_down_black.svg"
              alt=""
              className="max-w-[12px] cursor-pointer block object-contain"
              onClick={()=>setShow(!show)}
            />
           {show && <div onMouseLeave={()=>setShow(false)}  className="flex absolute flex-col top-10  border-[1px] border-neutral-300 max-h-[300px] overflow-y-scroll bg-white w-[100px]  gap-2">
              {list.map((item,i)=><option key={i*3} onClick={(e)=>{dropSelect(e); setDropDefault(e.target.value);setShow(false)}} className="px-2 cursor-pointer py-1 hover:bg-neutral-300">+{item}</option>
              )}
            </div>}
          </div>
          <input
            type={type || "text"}
            placeholder={placeholder}
            value={value}
            onChange={action}
            maxLength={maxLen}
            className="outline-none p-3 w-full  font-euclid-bold text-navy-500 text-sm bg-transparent "
          />
        </div>
      </div>
    </>
  );
};

export const DropDownSelect=({lable,list,action})=>{
     
    return (
      <>
        <div className="flex flex-col gap-1">
          <div className="text-xs text-neutral-600 font-euclid-bold">
            {lable}
          </div>
          <select onClick={(e)=>action(e)} className="outline-none border-[1px] font-euclid-bold text-navy-500 text-sm border-neutral-300 rounded-lg p-3">
            <option defaultValue disabled>Select</option>
            {list.map((item,i)=><option key={i*11} value={item}>{item}</option>)}
          </select>
        </div>
      </>
    );
}
export default TextBox