import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function InterviewCard({ interview }) {
  const router = useRouter();
  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };
  const onFeedback = () => {
    router.push("/dashboard/interview/" + interview.mockId + "/feedback");
  };
  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="font-bold text-primary capitalize">
        {interview?.jobPosition}
      </h2>
      <h2 className="text-sm text-gray-700">
        {interview?.jobExperience} Years of Experience
      </h2>
      <h2 className="text-sx text-gray-500">
        Created At: {interview?.createdAt}
      </h2>
      <div className="flex justify-between mt-3 gap-6">
        <Button
          onClick={onFeedback}
          size="sm"
          variant="outline"
          className="w-full"
        >
          Feedback
        </Button>

        <Button onClick={onStart} size="sm" className="w-full">
          Start
        </Button>
      </div>
    </div>
  );
}

export default InterviewCard;
