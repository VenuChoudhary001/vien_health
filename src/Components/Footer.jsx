import React from "react";
// import Button from "./Button";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-navy-900 pt-20 pb-5 grid grid-rows auto-rows-auto gap-10">
      <div className="container">
        <div className="grid grid-cols-12 gap-10">
          <div className="xl:col-span-7 col-span-12 grid-cols-1 sm:grid-cols-4 grid gap-4 sm:gap-20">
            <div className="flex flex-col gap-4">
              <div className="text-neutral-400 text-base font-euclid-medium">
                Products
              </div>
              <div className="pl-2 flex text-white font-euclid-light text-sm sm:flex-col gap-4">
                <NavLink
                  to="/contact"
                  className="cursor-pointer hover:underline"
                >
                  Reach
                </NavLink>
                <NavLink
                  to="/labs-diagonistic-companies"
                  className="cursor-pointer hover:underline"
                >
                  Link
                </NavLink>
                <NavLink to="/demo" className="cursor-pointer hover:underline">
                  Book a demo
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-neutral-400 text-base font-euclid-medium">
                Company
              </div>
              <div className="pl-2 flex text-white font-euclid-light text-sm sm:flex-col gap-4">
                <NavLink
                  to={"/about-us"}
                  className="cursor-pointer hover:underline"
                >
                  About
                </NavLink>
                <a
                  href="https://vienhealth.freshteam.com/jobs"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer hover:underline"
                >
                  Careers
                </a>
                <NavLink
                  to="/contact"
                  className="cursor-pointer hover:underline"
                >
                  Contact us
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-neutral-400 text-base font-euclid-medium">
                Legal
              </div>
              <div className="pl-2 flex text-white font-euclid-light text-sm sm:flex-col gap-4">
                <NavLink
                  to="/membership-terms"
                  className="cursor-pointer block hover:underline"
                >
                  Terms & Conditions
                </NavLink>
                <NavLink
                  to="/privacy-policy"
                  className="cursor-pointer block hover:underline"
                >
                  Privacy Policy
                </NavLink>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-neutral-400 text-base font-euclid-medium">
                Location
              </div>
              <div className="pl-2 flex text-white font-euclid-light text-sm flex-col gap-4">
                <div className="">Ghana</div>
                <div className="max-w-[280px] ">
                  Ghana No. 2 Boundary Rd, East Legon Accra, Ghana
                </div>
              </div>
            </div>
          </div>

          {/* <div className="xl:col-start-10 xl:col-span-3 col-span-12 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="text-white font-euclid-medium text-base">
                Subscribe to our newsletter
              </div>
              <div className="text-neutral-300 max-w-[280px] text-sm font-euclid-normal">
                The latest news, articles, and resources, sent to your inbox
                weekly
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type={"text"}
                placeholder="Email"
                className="bg-transparent h-10 text-sm border-[1px] border-navy-300 p-1 rounded-lg text-navy-300 outline-none"
              />
              <Button
                placeholder="Subscribe"
                style={
                  " rounded-lg h-10 w-24 font-euclid-medium text-sm text-white border-[1px] border-navy-300 "
                }
              />
            </div>
          </div> */}
        </div>
      </div>
      <div className="container hidden lg:block bg-navy-300 opacity-20 h-[0.5px] "></div>
      <div className="container flex flex-col sm:flex-row gap-2 justify-between items-center">
        <div className="text-white font-euclid-normal text-sm">
          All rights reserved© 2022 Vien Health
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/vienhealth/"
            rel="noreferrer"
            target={"_blank"}
          >
            <img
              alt=""
              className="w-4 object-contain cursor-pointer"
              src="/icons/fb.svg"
            />
          </a>
          <a
            href="https://twitter.com/vienhealth"
            rel="noreferrer"
            target={"_blank"}
          >
            <img
              alt=""
              className="w-4 object-contain cursor-pointer"
              src="/icons/twitter.svg"
            />{" "}
          </a>
          <a
            href="https://www.instagram.com/vienhealth/"
            rel="noreferrer"
            target={"_blank"}
          >
            <img
              alt=""
              className="w-4 object-contain cursor-pointer"
              src="/icons/insta.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/vien-health/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img
              alt=""
              className="w-4 object-contain cursor-pointer"
              src="/icons/linkedin.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;


/*
https://www.facebook.com/vienhealth/
https://www.instagram.com/vienhealth/
https://twitter.com/vienhealth
https://www.linkedin.com/company/vien-health/


*/