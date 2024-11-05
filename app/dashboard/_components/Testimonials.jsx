import { benefit, testo } from "@/data";
import React from "react";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="py-10">
      <h2
        data-aos="fade-up"
        data-aos-delay="500"
        className=" text-primary text-3xl font-bold mb-4"
      >
        Real Success Stories
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="700"
        className=" text-secondary text-xl font-bold mb-4"
      >
        See how HRWise has helped job seekers boost their confidence and succeed
        in interviews.
      </p>

      <div className="overflow-hidden mt-10  grid grid-cols-1 gap-7 md:grid-cols-3 place-items-center">
        {testo.map((item, index) => (
          <div
            key={index}
            data-aos="fade-left"
            data-aos-delay="700"
            className="border border-gray-400 bg-white rounded-md p-5 text-center"
          >
            <img
              className="w-20 h-20 rounded-full m-auto"
              src={item.img}
              alt=""
            />
            <h2 className="  font-bold text-xl text-primary">{item.name}</h2>
            <h2 className="pb-6 text-lg text-secondary">{item.jop}</h2>
            <p className="text-gray-600">{item.dec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
