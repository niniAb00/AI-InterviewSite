import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CallAction = () => {
  return (
    <div
      id="Get"
      className=" h-screen py-10 flex flex-col gap-3 justify-center items-center"
    >
      <h2
        data-aos="fade-up"
        data-aos-delay="500"
        className="text-center text-primary font-bold text-5xl"
      >
        Ready to ace your next interview?
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-center text-secondary text-base"
      >
        Sign up today and start a mock interview with HRWise to experience
        expert guidance on demand
      </p>
      <Link
        data-aos="fade-up"
        data-aos-delay="700"
        className=""
        href={"/dashboard"}
      >
        {" "}
        <Button className=" duration-700 bg-[#374151] w-fit hover:bg-[#374151]">
          Start your interview
        </Button>
      </Link>
    </div>
  );
};

export default CallAction;
