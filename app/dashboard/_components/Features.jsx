import { FeaturesSectionDemo } from "@/components/ui/FeaturesSectionDemo";
import React from "react";

const Features = () => {
  return (
    <div id="Features" className="overflow-hidden">
      <div className="mb-5 mt-10 text-center">
        <h2
          data-aos="fade-up"
          data-aos-delay="500"
          className=" text-primary text-3xl font-bold mb-4"
        >
          Key Features for Interview Success
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="700"
          className="  text-secondary  text-lg"
        >
          Explore the features that make HRWise your trusted partner for
          effective and secure interview preparation.
        </p>
      </div>
      <FeaturesSectionDemo />
    </div>
  );
};

export default Features;
