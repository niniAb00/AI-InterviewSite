"use client";

import { db } from "@/utils/db";
import { mockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewCard from "./InterviewCard";

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState(null); // تعيين القيمة الأولية كـ null
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(mockInterview)
      .where(
        eq(mockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)
      )
      .orderBy(desc(mockInterview.id));

    setInterviewList(result);
    setLoading(false); // إيقاف حالة التحميل بعد جلب البيانات
  };

  return (
    <div>
      <h2 className="text-xl font-medium">Previous Mock Interview</h2>
      {loading ? (
        <div className="text-center my-5">
          <span className="text-xl font-medium">Loading</span>
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
          <style jsx>{`
            .loading-dots span {
              animation: blink 1s infinite step-start both;
            }
            .loading-dots span:nth-child(1) {
              animation-delay: 0s;
            }
            .loading-dots span:nth-child(2) {
              animation-delay: 0.2s;
            }
            .loading-dots span:nth-child(3) {
              animation-delay: 0.4s;
            }
            @keyframes blink {
              0%,
              100% {
                opacity: 0;
              }
              50% {
                opacity: 1;
              }
            }
          `}</style>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-3">
          {interviewList && interviewList.length > 0 ? (
            interviewList.map((interview, index) => (
              <InterviewCard interview={interview} key={index} />
            ))
          ) : (
            <p className="text-center text-gray-500">No interviews found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default InterviewList;
