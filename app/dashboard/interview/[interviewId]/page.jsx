"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { mockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnable, setwebCamEnable] = useState(false);
  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(mockInterview)
      .where(eq(mockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };

  return (
    <div className="my-7 ">
      <h2 className="font-bold text-2xl capitalize mb-3">let get started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col rounded-lg border gap-5 p-5">
            <h2 className="text-lg">
              <strong>job Role/job Position: </strong>
              {interviewData ? interviewData.jobPosition : "Loading..."}
            </h2>
            <h2 className="text-lg">
              <strong>job Desorption: </strong>
              {interviewData ? interviewData.jobDesc : "Loading..."}
            </h2>
            <h2 className="text-lg">
              <strong>Years of Experience: </strong>
              {interviewData ? interviewData.jobExperience : "Loading..."}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-3 items-center text-yellow-500">
              <Lightbulb /> <strong>Information</strong>
            </h2>
            <h2 className="mt-3">
              {" "}
              Enable Video Web Cam and Microphone to Start your AI Generated
              Mock Interview. It has 5 questions which you can answer and at the
              last you will get the report on the basis of your answer. NOTE: We
              never record your video. Webcam access you can disable at any time
              if you want.
            </h2>
          </div>
        </div>
        <div className=" rounded-md">
          {webCamEnable ? (
            <Webcam
              mirrored={true}
              onUserMedia={() => setwebCamEnable(true)}
              onUserMediaError={() => setwebCamEnable(false)}
              style={{
                height: 300,
                width: 300,
              }}
              className="rounded-[30px]"
            />
          ) : (
            <div className="">
              {" "}
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setwebCamEnable(true)}
              >
                Enable Web and Microphone
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end items-center">
        {" "}
        <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
          {" "}
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
