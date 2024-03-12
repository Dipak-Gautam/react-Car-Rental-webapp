import React from "react";
import { MdLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="shadow-sm">
      <div className="container">
        <div className="flex justify-between  items-center ">
          <div>
            <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center text-xl py-2 ">
              <li>
                <a
                  className=" text-slate-800  py-1 no-underline  hover:border-b-2 hover:text-primary transition-colors transition-duration-500 font-medium"
                  href=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-slate-800  py-1 no-underline  hover:border-b-2 hover:text-primary transition-colors transition-duration-500 font-medium"
                  href=""
                >
                  Cars
                </a>
              </li>
              <li>
                <a
                  className="text-slate-800  py-1 no-underline  hover:border-b-2 hover:text-primary transition-colors transition-duration-500 font-medium"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-slate-800  py-1 no-underline  hover:border-b-2 hover:text-primary transition-colors transition-duration-500 font-medium"
                  href=""
                >
                  Booking
                </a>
              </li>
            </ul>
          </div>
          <div>
            <MdLightMode />
            <BsMoonStars />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
