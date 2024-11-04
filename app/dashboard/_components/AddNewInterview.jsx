"use client";
import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { mockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";

import moment from "moment";
import { useRouter } from "next/navigation";

const AddNewInterview = () => {
  const [openDailog, setopenDailog] = useState(false);
  const [jobPosition, setjobPosition] = useState();
  const [jobDesc, setjobDesc] = useState();
  const [jobExperi, setjobExperi] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);

  const router = useRouter();

  const { user } = useUser();
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperi);
    // const InputPrompt =
    //   "Job Position: " +
    //   jobPosition +
    //   ", Job Description: " +
    //   jobDesc +
    //   ", Years of Experience: " +
    //   jobExperi +
    //   ", Depends on this information please give me " +
    //   process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
    //   " Interview question with Answered in Json Format, Give Question and Answered as field in JSON";

    const InputPrompt =
      "Job Position: " +
      jobPosition +
      ", Job Description: " +
      jobDesc +
      ", Years of Experience: " +
      jobExperi +
      ". Based on the provided details, please generate " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " targeted interview questions with detailed answers in JSON format. " +
      "Ensure the questions cover both technical and behavioral aspects, focusing on the key skills and experience relevant to the role. Format the response as a JSON object with 'Question' and 'Answer' fields.";

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJasonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(MockJasonResp));
    setJsonResponse(MockJasonResp);
    if (MockJasonResp) {
      const resp = await db
        .insert(mockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJasonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperi,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: mockInterview.mockId });
      console.log("Inserted ID:", resp);
      if (resp) {
        setopenDailog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  };
  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-sm cursor-pointer transition-all"
        onClick={() => setopenDailog(true)}
      >
        <h2 className="font-bold text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
              tell us more about your job Interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <h2>
                  add details about your job position/role, job desorption and
                  yeats of experience
                </h2>
                <div className="mt-7 my-2">
                  <label>Job Role/Job Position</label>
                  <Input
                    className="mt-1"
                    placeholder="Ex. Full Stack Developer"
                    required
                    onChange={(event) => setjobPosition(event.target.value)}
                  />
                </div>
                <div className=" my-3">
                  <label className="capitalize">
                    job description/ tech stack (in short)
                  </label>
                  <Textarea
                    className="mt-1"
                    placeholder="Ex. React, Angular, NodeJs, etc... "
                    required
                    onChange={(event) => setjobDesc(event.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label>Job Role/Job Position</label>
                  <Input
                    className="mt-1"
                    placeholder="5"
                    type="number"
                    required
                    max="50"
                    onChange={(event) => setjobExperi(event.target.value)}
                  />
                </div>
                <div className="py-5 flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setopenDailog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <LoaderCircle className="animate-spin" />
                        "Generating from AI"{" "}
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
