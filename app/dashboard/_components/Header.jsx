"use client";
import { items } from "@/data";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react"; // استيراد useEffect بشكل صحيح

const Header = () => {
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
          ـ
        >
          {" "}
          <h2 className="font-bold text-primary text-2xl">HRWise</h2>{" "}
        </Link>

        <div className="flex justify-end items-center">
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
