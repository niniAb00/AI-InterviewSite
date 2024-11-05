"use client";
import { items } from "@/data";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react"; // استيراد useEffect بشكل صحيح

const HomeHeader = () => {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="  grid grid-cols-1 md:grid-cols-2 py-4 items-center justify-between ">
        <Link
          className="m-auto md:m-0"
          data-aos="fade-down"
          data-aos-delay="500"
          href={"/"}
        >
          {" "}
          <h2 className="font-bold text-primary text-2xl">HRWise</h2>{" "}
        </Link>

        <div>
          <ul className=" pt-4 md:pt-0 flex gap-6 items-center md:justify-end justify-center">
            {items.map((item, index) => (
              <li
                key={index}
                data-aos="fade-down"
                data-aos-delay="500"
                className=" du cursor-pointer transition-colors duration-500 ease-in-out hover:text-primary hover:font-bold"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
