"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomeHeader from "./dashboard/_components/HomeHeader";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Features from "./dashboard/_components/Features";
import Benefits from "./dashboard/_components/Benefits";
import Testimonials from "./dashboard/_components/Testimonials";
import CallAction from "./dashboard/_components/CallAction";
import Footer from "./dashboard/_components/Footer";

export default function Home() {
  return (
    <div className="">
      {" "}
      <HomeHeader />
      <GridBackgroundDemo />
      <Features />
      <Benefits />
      <Testimonials />
      <CallAction />
      <Footer />
    </div>
  );
}
