"use client";

import React, { useState } from "react";
import DataTable from "./DataTable";
import { useUsers } from "@/hooks/useUsers";
import TableSkeleton from "./TableSkeleton";
import { userFiltersConfig } from "../FilterWindow/UserFilterConfig";
import { UserTableColumns } from "./constants/AdminUserConstants";
import { ColumnType } from "@/types/DataTableTypes";

const AdminUserTable: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(
    {}
  );
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

  if (loading) {
    return (
      <TableSkeleton
        columns={[
          { key: "id", width: "w-16" },
          { key: "user", hasImage: true, hasSubtext: true, width: "w-64" },
          { key: "phone", width: "w-32" },
          { key: "role", width: "w-24" },
          { key: "createdAt", width: "w-32" },
        ]}
        rows={10}
        actions={3}
      />
    );
  }

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
      activeFilters={activeFilters}
      setActiveFilters={setActiveFilters}
    />
  );
};

export default AdminUserTable;
