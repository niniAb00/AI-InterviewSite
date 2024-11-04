"use client";

import { db } from "@/utils/db";
import { mockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();

  const [ActiveQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    GetInterviewDetails();
  }, []);
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(mockInterview)
      .where(eq(mockInterview.mockId, params.interviewId));
    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };
  return (
    <div>
      <div className=" mt-5 mb-2 gap-10 grid  grid-cols-1 md:grid-cols-2 ">
        {/* Questions */}
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          ActiveQuestionIndex={ActiveQuestionIndex}
        />
        {/* Video Audio Recording */}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          ActiveQuestionIndex={ActiveQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className="flex  justify-center capitalize gap-10">
        {ActiveQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(ActiveQuestionIndex - 1)}
          >
            previous question
          </Button>
        )}
        {ActiveQuestionIndex != mockInterviewQuestion?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(ActiveQuestionIndex + 1)}
          >
            next question
          </Button>
        )}

        {ActiveQuestionIndex == mockInterviewQuestion?.length - 1 && (
          <Link
            href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
          >
            <Button>end interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default StartInterview;
