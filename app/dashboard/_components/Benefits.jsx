import { benefit } from "@/data";
import React from "react";

const Benefits = () => {
  return (
    <div id="Benefits" className="py-10">
      <h2
        data-aos="fade-up"
        data-aos-delay="500"
        className="  text-center text-primary text-3xl font-bold mb-4"
      >
        Unlock Your Interview Potential
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="700"
        className="text-lg text-center text-secondary"
      >
        With HRWise, build the skills and confidence to succeed in any interview
        scenario.
      </p>
      <div className="  mt-10  grid grid-cols-1 md:grid-cols-2 pla place-items-center ">
        <div className="">
          {benefit.map((item, index) => (
            <div key={index} className="mb-10">
              <h2
                data-aos="fade-right"
                data-aos-delay="500"
                className="text-2xl font-bold"
              >
                {item.title}
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="700"
                className="text-secondary text-lg"
              >
                {item.dec}
              </p>
            </div>
          ))}
        </div>
        <img
          data-aos="fade-left"
          data-aos-delay="500"
          className="w-[80%]"
          src="/vv.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Benefits;
