import React from "react";
import { FaCameraRetro } from "react-icons/fa";

const Services = () => {
  return (
    <div className="py-14 dark:bg-dark dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12" data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-3xl font-semibold sm:text-4xl  text-center font-serif pb-4">
            Why choose Us
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
              className="bg-slate-800 text-gray-50 rounded-2xl px-20 py-9 text-center text-xl sm:text-2xl space-y-4 border border-orange-300 hover:bg-orange-500 dark:bg-gray-200 dark:text-black dark:hover:bg-orange-500"
              data-aos="fade-right"
            >
              <p>
                <FaCameraRetro className="mx-auto text-6xl text-orange-400" />
              </p>
              <h1>Best Price</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                temporibus eveniet natus amet consequuntur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                dolorum ipsa vitae quaerat, iste ab totam corporis suscipit iure
                officiis.
              </p>
            </div>
            <div className="bg-slate-800 text-gray-50 rounded-2xl px-20 py-9 text-center text-xl sm:text-2xl space-y-4 border border-orange-300 hover:bg-orange-500 dark:bg-gray-200 dark:text-black dark:hover:bg-orange-500">
              <p>
                <FaCameraRetro className="mx-auto text-6xl text-orange-400" />
              </p>
              <h1>Best Price</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                temporibus eveniet natus amet consequuntur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                dolorum ipsa vitae quaerat, iste ab totam corporis suscipit iure
                officiis.
              </p>
            </div>
            <div
              className="bg-slate-800 text-gray-50 rounded-2xl  text-center text-xl px-20 py-9 sm:text-2xl space-y-4 border border-orange-300 hover:bg-orange-500 dark:bg-gray-200 dark:text-black dark:hover:bg-orange-500"
              data-aos="fade-left"
            >
              <p>
                <FaCameraRetro className="mx-auto text-6xl text-orange-400" />
              </p>
              <h1>Best Price</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                temporibus eveniet natus amet consequuntur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                dolorum ipsa vitae quaerat, iste ab totam corporis suscipit iure
                officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
