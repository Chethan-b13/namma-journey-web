import AdminUserTable from "@/components/DataTable/AdminUserTable";
import React from "react";

const Home = () => {
  console.log("Home");
  return (
    <div className="flex-1">
      <AdminUserTable />
    </div>
  );
};

export default Home;
