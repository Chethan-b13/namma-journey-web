import AdminUserTable from "@/components/DataTable/AdminUserTable";
import React from "react";

const Home = () => {
  console.log("Home");
  return (
    <div className="flex-1">
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
  );
};

export default Home;
