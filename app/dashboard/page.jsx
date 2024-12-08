import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import IntterviewList from "./_components/IntterviewList";

const Dashboard = () => {
  return (
    <div className="py-10">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="capitalize text-gray-500">
        create and start your AI mockup interviews
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-3 my-3">
        <AddNewInterview />
      </div>

      <IntterviewList />
    </div>
  );
};

export default Dashboard;
