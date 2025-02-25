"use client";

import React from "react";
import DataTable from "./DataTable";
import { useUsers } from "@/hooks/useUsers";
import TableSkeleton from "./TableSkeleton";
import { userFiltersConfig } from "../FilterWindow/UserFilterConfig";
import { UserTableColumns } from "./constants/AdminUserConstants";
import { ColumnType } from "@/types/DataTableTypes";

const AdminUserTable: React.FC = () => {
  const {
    users,
    loading,
    error,
    totalRecords,
    currentPage,
    limit,
    setCurrentPage,
    setlimit,
  } = useUsers();

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error loading users: {error.message}
      </div>
    );
  }

  return (
    <DataTable
      columns={UserTableColumns as ColumnType[]}
      data={users}
      totalRecords={totalRecords}
      currentPage={currentPage}
      limit={limit}
      onPageChange={setCurrentPage}
      onlimitChange={setlimit}
      isLoading={loading}
      filterConfig={{
        title: "User Filters",
        filters: userFiltersConfig,
      }}
    />
  );
};

export default AdminUserTable;
