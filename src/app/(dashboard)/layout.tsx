import Card from "@/components/cards/Card";
import MetricCard from "@/components/cards/MetricCard";
import Button from "@/components/common/Button";
import Logo from "@/components/common/Logo";
import SideBar from "@/components/common/SideBar";
import UserTable from "@/components/Users/UserTable";
import PeopleList, { aboutMe, projectContribution } from "@/libs/dummyData";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex w-screen h-screen p-4 bg-[#FAF9FF] gap-x-6">
      <SideBar />
      <div className="flex-1 border-2 border-slate-200 rounded-2xl">
        {/* TO BE DETELED */}
        {/* <UserTable /> */}

        <div className="flex mr-5 gap-3">
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
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
