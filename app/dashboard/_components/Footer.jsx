import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between pb-2">
      <div className="flex gap-3 text-primary text-sm">
        <h2>HRWise</h2>
        <p>Copyright © 2010-2024 All rights reserved.</p>
      </div>
      <p className=" text-primary text-sm">
        Made by{" "}
        <a
          className="text-secondary font-bold text-base hover:text-[17px] hover:text-blue-500 duration-500"
          href="https://abdullah-profile.vercel.app/"
          target="blank"
        >
          Abdullah Mohammed
        </a>
      </p>
    </div>
  );
};

export default Footer;
