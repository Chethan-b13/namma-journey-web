"use client";

import React, { useState } from "react";
import DataTable, { Column } from "./DataTable";
import { useUsers } from "@/hooks/useUsers";
import { format } from "date-fns";
import Image from "next/image";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Link from "next/link";
import TableSkeleton from "./TableSkeleton";
import { userFilters } from "../FilterWindow/UserFilter";

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
    applyFilters,
  } = useUsers();

  const columns = [
    {
      key: "id",
      title: "ID",
      accessor: "_id",
      searchable: true,
    },
    {
      key: "user",
      title: "User",
      accessor: "firstName",
      searchable: true,
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <Image
            src={row.profilePic || "/images/default-avatar.png"}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
            width={40}
            height={40}
          />
          <div>
            <div className="font-medium">{`${row.firstName} ${row.lastName}`}</div>
            <div className="text-sm text-gray-500">{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "lastName",
      accessor: "lastName",
      searchable: true,
      hidden: true,
    },
    {
      key: "email",
      accessor: "email",
      searchable: true,
      hidden: true,
    },
    {
      key: "phone",
      title: "Phone",
      accessor: "phone",
    },
    {
      key: "role",
      title: "Role",
      accessor: "role",
      render: (value: any) => {
        const roleColors: Record<string, string> = {
          admin: "bg-purple-100 text-purple-800",
          agency: "bg-blue-100 text-blue-800",
          traveler: "bg-green-100 text-green-800",
          "travel partner": "bg-orange-100 text-orange-800",
          default: "bg-gray-100 text-gray-800",
        };

        const role = String(value || "").toLowerCase();
        const colorClass = roleColors[role] || roleColors.default;
        const displayValue =
          role === "" ? "N/A" : role.charAt(0).toUpperCase() + role.slice(1);

        return (
          <span className={`px-2 py-1 rounded-full text-xs ${colorClass}`}>
            {displayValue}
          </span>
        );
      },
    },
    {
      key: "createdAt",
      title: "Created At",
      accessor: "createdAt",
      render: (value: string) => format(new Date(value), "MMM dd, yyyy"),
    },
    {
      key: "actions",
      title: "Actions",
      accessor: "_id",
      render: (value: string) => (
        <div className="flex gap-1">
          <Link href={`/admin/users/${value}`}>
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
              <FaEye className="text-xl" />
            </button>
          </Link>

          <Link href={`/admin/users/${value}`}>
            <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800">
              <FaEdit className="text-xl" />
            </button>
          </Link>
          <button className="px-3 py-1 text-sm text-red-600 hover:text-red-800">
            <FaTrash className="text-xl" />
          </button>
        </div>
      ),
    },
  ];

  const handleFilterApply = (filters: Record<string, string>) => {
    // Map filter keys to data fields and transform values as needed
    const transformedFilters = Object.entries(filters).reduce(
      (acc, [key, value]) => {
        if (!value) return acc;

        const fieldMap: Record<string, string> = {
          firstname: "firstName",
          lastname: "lastName",
          createdAt: "createdAt",
          role: "role",
          phone: "phone",
          email: "email",
        };

        const fieldKey = fieldMap[key] || key;
        acc[fieldKey] = value;
        return acc;
      },
      {} as Record<string, string>
    );

    applyFilters(transformedFilters);
  };

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
        rows={5}
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
      columns={columns as Column[]}
      data={users}
      totalRecords={totalRecords}
      currentPage={currentPage}
      limit={limit}
      onPageChange={setCurrentPage}
      onlimitChange={setlimit}
      isLoading={loading}
      filterConfig={{
        title: "User Filters",
        filters: userFilters,
      }}
      onFilterApply={handleFilterApply}
      activeFilters={activeFilters}
    />
  );
};

export default AdminUserTable;
