import Card from "@/components/cards/Card";
import MetricCard from "@/components/cards/MetricCard";
import Filterbar from "@/components/FilterWindow/FilterBar";
import SideBar from "@/components/common/SideBar";
import PeopleList, {
  aboutMe,
  columns,
  projectContribution,
  dummyUsers,
} from "@/libs/dummyData";
import DataTable from "@/components/DataTable/DataTable";
// import { userColumns, usersData } from "@/libs/dummyData";
import React from "react";
import AdminUserTable from "@/components/DataTable/AdminUserTable";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex w-screen h-screen bg-[#FAF9FF]">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 overflow-auto">
          {/* TO BE DETELED */}
          {/* <DataTable data={usersData} columns={userColumns} title="User List" /> */}
          {/* TO BE DETELED */}
          <AdminUserTable />

          {/* <div className="flex mr-5 gap-3">
              <MetricCard
                title="Travel date"
                value="5 days"
                children="01.09.2021 - 05.09.2021"
              />
              <MetricCard title="People" value="2 /adults">
                <PeopleList />
              </MetricCard>
            </div>
            <div className="flex gap-3 m-5">
              <Card header="About Me" columns={aboutMe} columnCount={1} />
              <Card
                header="Projects Contributions"
                columns={projectContribution}
                columnCount={4}
              />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
