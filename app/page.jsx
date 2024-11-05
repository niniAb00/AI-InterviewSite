"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomeHeader from "./dashboard/_components/HomeHeader";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Features from "./dashboard/_components/Features";
import { FeaturesSectionDemo } from "@/components/ui/FeaturesSectionDemo";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="">
      {" "}
      <HomeHeader />
      <GridBackgroundDemo />
      <Features />
    </div>
  );
}
