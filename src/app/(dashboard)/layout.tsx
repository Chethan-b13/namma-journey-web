import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import SideBar from "@/components/common/SideBar";
import UserTable from "@/components/Users/UserTable";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex w-screen h-screen p-4 bg-[#FAF9FF] gap-x-6">
      <SideBar />
      <div className="flex-1 border-2 border-slate-200 rounded-2xl">
        {/* TO BE DETELED */}
        <UserTable />
      </div>
    </div>
  );
};

export default DashboardLayout;
