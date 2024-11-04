import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

const QuestionsSection = ({ mockInterviewQuestion, ActiveQuestionIndex }) => {
  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion &&
            mockInterviewQuestion.map((Question, index) => (
              <h2
                className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer ${
                  ActiveQuestionIndex == index && "bg-blue-500 text-white"
                }`}
              >
                Question #{index + 1}
              </h2>
            ))}
        </div>{" "}
        <h2 className="my-5 text-md md:text-lg">
          {mockInterviewQuestion[ActiveQuestionIndex]?.Question}
        </h2>
        <div className="border rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex items-center gap-3 text-primary">
            <Lightbulb />
            <strong>Note: </strong>
          </h2>
          <h2 className="py-3 text-primary">
            {" "}
            Click on Record Answer when you want to answer the question. At the
            end of the interview, we will give you the feedback along with the
            correct answer for each question and your answer to compare it.
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionsSection;
