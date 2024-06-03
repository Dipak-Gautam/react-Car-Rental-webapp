import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-slate-100 dark:bg-dark dark:text-white sm:grid sm:place-items-center duration-300 sm:min-h-[500px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
            <div
              data-aos="slide-right"
              data-aos-duration="1500"
              data-aos-once="false"
            >
              <img
                src="asset/images/car2.png"
                alt=""
                className="sm:scale-105 sm:-translate-x-20 max-h-[300px]"
              />
            </div>
            <div className="space-y-5 sm:p-16 sm:pb-6">
              <h1
                className="text-3xl sm:text-4xl font-bold font-serif"
                data-aos="fade-up"
              >
                About Us
              </h1>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur unde accusantium sequi iure ducimus!
              </p>
              <p data-aos="fade-up">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat, quo!
              </p>
              <button className="button-outline " data-aos="fade-up">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
