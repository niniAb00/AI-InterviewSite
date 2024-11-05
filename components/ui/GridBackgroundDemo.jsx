// import React from "react";
// import { Button } from "./button";

// export function GridBackgroundDemo() {
//   return (
//     <div
//       className="relative flex items-center justify-center bg-white dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
//       style={{ height: "calc(100vh - 78px)" }}
//     >
//       {/* Radial gradient for the container to give a faded look */}
//       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

//       <div className="relative z-20 flex justify-center items-center flex-col gap-12">
//         <h2 className="text-fontc leading-[96px] font-extrabold text-[86px] text-transparent bg-clip-text bg-gradient-to-b from-[#1F2937] to-[#1F2937]">
//           Maintaining code should <br /> be easier than writing it.
//         </h2>

//         <div className="flex items-center gap-12 w-full lg:w-[1047px]">
//           <div className="flex flex-col gap-4">
//             <Button className="bg-[#374151] w-fit hover:bg-[#374151]">
//               Start your interview
//             </Button>
//             <div className="flex gap-3 items-center">
//               <img src="/pepol.svg" alt="People Icon" />
//               <p className="text-[#0F172A] text-xs">
//                 Used daily by 2000+ developers
//               </p>
//             </div>
//           </div>
//           <div className="w-[496.69px]">
//             <p>
//               Dosu lets engineers focus on value-add work by answering
//               questions, triaging issues, and maintaining documentation for
//               them.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Button } from "./button";
import Link from "next/link";

export function GridBackgroundDemo() {
  return (
    <div
      className="relative overflow-hidden flex items-center justify-center bg-[#fcf7ec] dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.09]"
      style={{ height: "calc(100vh - 78px)" }}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#fcf7ec]  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className=" relative z-20 flex justify-center items-center flex-col gap-12">
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-primary md:leading-[96px] font-extrabold text-[38px]  lg:text-[86px]  leading-[50px] py-8 "
        >
          Preparing for interviews should <br /> be easier than facing them.
        </h2>

        <div className="flex flex-col-reverse items-center  md:flex-row jus justify-center md:justify-normal md:gap:12 gap-5 w-full">
          <div className="flex flex-col gap-4">
            <Link className="text-center m-auto" href={"/dashboard"}>
              {" "}
              <Button
                data-aos="fade-left"
                data-aos-delay="600"
                className=" duration-700 bg-[#374151] w-fit hover:bg-[#374151]"
              >
                Start your interview
              </Button>
            </Link>
            <div
              data-aos="fade-left"
              data-aos-delay="800"
              className="flex gap-3 items-center"
            >
              <img src="/pepol.svg" alt="People Icon" />
              <p className="text-[#0F172A] text-xs">
                Used daily by 2000+ job seekers .
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-full text-center md:w-[496.69px]"
          >
            <p>
              HRWise empowers job seekers with realistic interviews,
              personalized feedback, and tools to refine their responses.**
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
