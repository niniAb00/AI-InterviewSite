"use client";
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-4 items-center justify-between bg-scendary ">
      <Link href={"/"}>
        {" "}
        <Image src={"/logo.svg"} width={160} height={100} />
      </Link>
      <ul className="hidden md:flex gap-6 items-center justify-center">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/dashboard" && "text-primary font-bold"}
          `}
        >
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>

        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/question" && "text-primary font-bold"}
          `}
        >
          <Link href={"/question"}>Questions</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/dashboard/upgrade" && "text-primary font-bold"}
          `}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/dashboard/how" && "text-primary font-bold"}
          `}
        >
          <Link href="#nnn"> How it Works?</Link>
        </li>
      </ul>
      <div className="flex  justify-end">
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
