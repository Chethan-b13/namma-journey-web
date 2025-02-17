import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import SideBar from "@/components/common/SideBar";
import DataTable from "@/components/DataTable/DataTable";
import { userColumns, usersData } from "@/libs/dummyData";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex w-screen h-screen p-4 bg-[#FAF9FF] gap-x-6">
      <SideBar />
      <div className="flex-1 border-2 border-slate-200 rounded-2xl">
        {/* TO BE DETELED */}
        <DataTable data={usersData} columns={userColumns} title="User List" />;
      </div>
    </div>
  );
};

export default DashboardLayout;
