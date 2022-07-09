import React from "react";
import Button from "./Button";
import { NavLink,useNavigate } from "react-router-dom";
const list = [
  {
    title: "Hospital & Health systems",
    to: "/hospital-and-health-systems",
  },
  {
    title: "Labs & Diagnostic companies",
    to: "/labs-diagonistic-companies",
  },
  {
    title: "Pharmacies & Retailers",
    to: "/pharmacies-retailers",
  },
  {
    title:"Employers",
    to:"/employers"
  }
];
const Navbar = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/demo");
  };
  const [showSideBar,setShowSideBar]=React.useState(false);
  return (
    <>
      <div className={`"z-[1000] nav -mt-1 bg-navy-900 sm:pt-2  w-full"`}>
        <div className="container">
          <div className="flex justify-between items-center sm:min-h-[60px]">
            <NavLink to="/" className="flex h-full justify-center items-center">
              <img
                src="/logo.png"
                alt=""
                className="block h-8 sm:h-full object-contain "
              />
            </NavLink>
            <div className="flex gap-32">
              <div className="hidden lg:flex gap-4 xl:gap-8 items-center justify-center text-xs text-white xl:text-sm font-euclid-medium">
                <DropDown placeholder={"Products"} list={list} />

                <NavLink to="/about-us" className="cursor-pointer">
                  About
                </NavLink>
                <a
                  href="https://blog.vienhealth.com"
                  target={"_blank"}
                  className="cursor-pointer"
                >
                  Blogs
                </a>
                <a
                  href="https://vienhealth.freshteam.com/jobs"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer"
                >
                  Careers
                </a>
                <NavLink to={"/contact"} className="cursor-pointer">
                  Contact us
                </NavLink>
              </div>
              <div className="flex gap-4 lg:gap-8">
                <Button
                  placeholder={"Book a demo"}
                  style={`w-24 xl:w-28 hidden sm:block  m-auto  h-8 xl:h-10 bg-white text-[12px] xl:text-xs  text-neutral-800 flex gap-2 items-center justify-center font-euclid-medium rounded-lg`}
                  action={handleClick}
                />
                <img
                  src="/icons/menu.svg"
                  alt=""
                  className="block lg:hidden object-contain cursor-pointer max-w-12"
                  onClick={() => setShowSideBar(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSideBar && <SideBar setShow={setShowSideBar} />}
    </>
  );
};

export const DropDown = ({ placeholder, list }) => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="flex  text-white flex-col ">
        <div
          className="flex gap-2 cursor-pointer"
          onMouseEnter={() => setShow(true)}
         
        >
  
          {placeholder}
          <img
        
            src="/icons/cheveron_down.svg"
            alt=""
            className="block max-w-[12px] w-full cursor-pointer object-contain"
          />
        </div>

        {show && (
          <div
            onMouseLeave={() => setShow(false)}
            className="hidden  absolute list-none text-neutral-600 rounded top-[70px] lg:flex flex-col w-[250px] bg-white translate-y-50"
          >
            {list.map((item, i) => (
              <NavLink
                to={item.to}
                key={i + 8}
                className="hover:bg-neutral-100 cursor-pointer px-5 p-3 rounded"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        )}
        <div className="lg:hidden  ml-3 flex flex-col gap-2">
          {list.map((item, i) => (
            <NavLink
              to={item.to}
              key={i * 21}
              className="font-euclid-normal text-sm flex gap-2 border-white px-3 py-2 hover:border-b-[1px] border-neutral-100/50 cursor-pointer"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};



export const SideBar=({setShow})=>{
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/demo");
  };
  return (
    <>
      <div className="block z-[30] lg:hidden px-3 gap-4 w-full bg-navy-900 text-neutral-50 py-4 font-euclid-medium   h-screen fixed top-0 right-0 flex flex-col">
        <div className=" px-3 flex items-center justify-between">
          <NavLink to="/" onClick={() => setShow(false)}>
            <img
              src="/logo.png"
              alt=""
              className="block h-8 cursor-pointer  object-contain font-euclid-medium text-lg "
            />
          </NavLink>
          <img
            src="/icons/close.svg"
            alt=""
            className="block h-5 cursor-pointer object-contain  text-lg "
            onClick={() => setShow(false)}
          />
        </div>
        <div className="bg-navy-300/20 h-[1px] w-full"></div>
        <div
          className="  px-3 py-2   cursor-pointer"
          onClick={() => setShow(false)}
        >
          <DropDown placeholder={"Products"} list={list} />
        </div>
        <NavLink
          onClick={() => setShow(false)}
          to="/about-us"
          className=" border-white px-3 py-2 hover:border-b-[1px] border-neutral-100/50 cursor-pointer"
        >
          About
        </NavLink>
        <a
          href="https://blog.vienhealth.com"
          target={"_blank"}
          className=" border-white px-3 py-2 hover:border-b-[1px] border-neutral-100/50 cursor-pointer"
        >
          Blogs
        </a>
        <a
          href="https://vienhealth.freshteam.com/jobs"
          target={"_blank"}
          className=" border-white px-3 py-2 hover:border-b-[1px] border-neutral-100/50 cursor-pointer"
        >
          Careers
        </a>
        <NavLink
          onClick={() => setShow(false)}
          to="/contact"
          className=" border-white px-3 py-2 hover:border-b-[1px] border-neutral-100/50 cursor-pointer"
        >
          Contact us
        </NavLink>
        <div className="flex px-3 py-4 max-w-max gap-4">
          <Button
            placeholder={"Book a demo"}
            style={`w-24 xl:w-28 block  m-auto  h-8 xl:h-10 bg-white text-[12px] xl:text-xs  text-neutral-800 flex gap-2 items-center justify-center font-euclid-medium rounded-lg`}
            action={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
