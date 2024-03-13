import React from "react";
import { MdLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

const Navbar = ({ theme, settheme }) => {
  return (
    <nav className="shadow-md  dark:bg-black dark:text-white duration-500">
      <div className="container">
        <div className="flex justify-between  items-center ">
          <div>
            <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center text-xl py-2 ">
              <li>
                <a
                  className=" text-slate-800  py-1 no-underline  hover:border-b-2 hover:text-primary transition-colors transition-duration-500 font-medium dark:text-white dark:hover:text-primary"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-slate-800  py-1 no-underline  hover:border-b-2 hover:text-primary transition-colors transition-duration-500 font-medium dark:text-white dark:hover:text-primary"
                  href="#"
                >
                  Cars
                </a>
              </li>
              <li>
                <a
                  className="text-slate-800  py-1 no-underline  hover:border-b-2 hover:text-primary transition-colors transition-duration-500 font-medium dark:text-white  dark:hover:text-primary"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-slate-800  py-1 no-underline  dark:text-white hover:border-b-2 hover:text-primary transition-colors transition-duration-500 font-medium dark:hover:text-primary"
                  href="#"
                >
                  Booking
                </a>
              </li>
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <MdLightMode
                onClick={() => settheme("light")}
                className="p-2 text-4xl"
              />
            ) : (
              <BsMoonStars
                onClick={() => settheme("dark")}
                className="p-2 text-4xl"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
