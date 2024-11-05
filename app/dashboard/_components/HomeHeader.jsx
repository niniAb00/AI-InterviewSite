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
      <div className="  grid grid-cols-2 py-4 items-center justify-between ">
        <Link data-aos="fade-down" data-aos-delay="500" href={"/"}>
          {" "}
          <Image src={"/logo.svg"} width={160} height={100} />
        </Link>

        <div>
          <ul className="hidden md:flex gap-6 items-center justify-end">
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
