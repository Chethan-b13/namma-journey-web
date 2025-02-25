import Header from "@/components/common/Header";
import SideBar from "@/components/common/SideBar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex w-screen h-screen p-4 gap-x-4 overflow-x-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
