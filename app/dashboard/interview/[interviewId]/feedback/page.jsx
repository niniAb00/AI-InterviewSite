"use client";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { db } from "@/utils/db";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState(null);
  const [overallRating, setOverallRating] = useState(null);
  const [loading, setLoading] = useState(true);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    const totalRating = result.reduce(
      (sum, item) => sum + parseInt(item.rating || 0),
      0
    );
    const maxRating = result.length * 10;
    const finalRating = (totalRating / maxRating) * 10;

    setFeedbackList(result);
    setOverallRating(finalRating.toFixed(1));
    setLoading(false);
  };

  useEffect(() => {
    GetFeedback();
  }, []);

  if (loading) {
    return (
      <div className="p-10">
        <h2 className="text-xl text-gray-500">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="p-10">
      {feedbackList && feedbackList.length === 0 ? (
        <h2 className="capitalize font-bold my-5 text-center text-xl text-gray-500">
          No interview feedback found. Please complete an interview to see
          feedback here.
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">
            Congratulations!
          </h2>
          <h2 className="capitalize font-bold text-2xl">
            Here is your interview feedback
          </h2>
          <h2 className="capitalize text-primary text-lg my-3">
            Your overall interview rating <strong>{overallRating}/10</strong>
          </h2>
          <h2 className="capitalize text-sm text-gray-500">
            Find below interview question with correct answer, your answer, and
            feedback for improvement
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible className="pb-4 pt-3" key={index}>
                <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex gap-4 w-full">
                  {item.question}
                  <ChevronsUpDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {item.rating}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your Answer: </strong> {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Guidance: </strong> {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-900">
                      <strong>Feedback: </strong> {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <Link href={"/dashboard"}>
        <Button>Go Home</Button>
      </Link>
    </div>
  );
}

export default Feedback;
