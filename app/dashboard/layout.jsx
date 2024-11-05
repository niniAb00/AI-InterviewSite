import React from "react";
import Header from "./_components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="">
        {" "}
        <Header /> {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
DashboardLayout;
