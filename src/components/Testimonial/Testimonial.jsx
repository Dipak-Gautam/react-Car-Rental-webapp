import React from "react";

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        <div className="space-y-4 pb-12 text-center">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold font-serif  sm:text-4xl"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="sm:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg aos-init aos-animate"
          >
            <div className="grid place-items-center">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="h-20 w-20 rounded-full"
              />
            </div>
            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            <p className="dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p className="font-semibold text-center dark:text-white">Dilshad</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg aos-init aos-animate"
          >
            <div className="grid place-items-center">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="h-20 w-20 rounded-full"
              />
            </div>
            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            <p className="dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p className="font-semibold text-center dark:text-white">Satya</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg aos-init aos-animate"
          >
            <div className="grid place-items-center">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="h-20 w-20 rounded-full"
              />
            </div>
            <div className="text-2xl">⭐⭐⭐⭐⭐</div>
            <p className="dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p className="font-semibold text-center dark:text-white">Sabir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
