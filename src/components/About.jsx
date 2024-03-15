import React from "react";

const About = () => {
  return (
    <div>
      <div className=" dark:bg-dark dark:text-white sm:grid sm:place-items-center duration-300 sm:min-h-[500px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div>
              <img
                src="asset/images/car2.png"
                alt=""
                className="sm:scale-105 sm:-translate-x-20 max-h-[300px]"
              />
            </div>
            <div className="space-y-5 sm:p-16 sm:pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif">
                About Us
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur unde accusantium sequi iure ducimus!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, quo!
              </p>
              <button className="button-outline">Get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
