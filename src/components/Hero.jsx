import React from "react";

const Hero = ({ theme }) => {
  return (
    <div className=" dark:bg-black dark:text-white duration-300 relative -z-20">
      <div className=" container flex min-h-[600px] ">
        <div className=" grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div className=" sm:order-2" data-aos="zoom-in">
            <img
              className="relative -z-10  max-h-[520px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] "
              src={
                theme === "dark"
                  ? "https://car-rental-tcj.netlify.app/assets/car-ZEOhyDK7.png"
                  : "https://car-rental-tcj.netlify.app/assets/banner-car-OqntjgSL.png"
              }
              alt=""
            />
          </div>
          <div className=" sm:order-1 space-y-5 sm:pr-32">
            <p className=" text-2xl font-serif text-[#ffc727]">Effortless</p>
            <h1 className=" text-5xl lg:text-7xl font-semibold font-serif ">
              Car Rental
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum.
              wabkjwakswaD
            </p>
            <button className="bg-[#ffc727] text-black px-6 py-2 hover:bg-orange-300 duration-300 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
