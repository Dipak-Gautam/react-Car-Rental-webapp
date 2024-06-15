import React from "react";

const Carlist = () => {
  const Carlist = [
    {
      name: "Bmw",
      image: "asset/carlist/bmw.png",
      price: "15000/hr",
    },
    {
      name: "Scorpio",
      image: "asset/carlist/scorpio.png",
      price: "800/hr",
    },
    {
      name: "Lamborgini",
      image: "asset/carlist/car2.png",
      price: "8000/hr",
    },
  ];
  return (
    <div className="dark:bg-dark dark:text-white  pb-32">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif text-center underline pb-4 "
        >
          Available Cars
        </h1>
        <p data-aos="fade-up" className="text-center text-lg pb-12 ">
          Choose cars according to your needs. we offer varity of cars that
          suites you
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 mb-16">
            {Carlist.map((car) => (
              <div
                // data-aos="fade-out"
                className="p-4 border-2 border-gray-400 rounded-md hover:border-primary"
              >
                <div>
                  <p className="font-semibold">pokhara</p>
                </div>
                <div className="w-full h-[150px]">
                  <img
                    className="w-full h-[150px] object-contain  hover:translate-x-4 duration-500 "
                    src={car.image}
                  />
                </div>
                <div className="text-orange-400 font-bold font-serif">
                  {car.name}
                </div>
                <div>
                  <p>${car.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="px-4 py-2 border-2 border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black duration-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carlist;
