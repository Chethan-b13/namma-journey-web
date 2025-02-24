"use client";

import React from "react";
import DataTable from "./DataTable";
import { useUsers } from "@/hooks/useUsers";
import { format } from "date-fns";
import Image from "next/image";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Link from "next/link";

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

  const columns = [
    {
      key: "id",
      title: "ID",
      accessor: "_id",
    },
    {
      key: "user",
      title: "User",
      accessor: "firstName",
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <Image
            src={row.profilePic || "/images/default-avatar.png"}
            alt="Profile"
            className="w-10 h-10 rounded-full"
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
      key: "phone",
      title: "Phone",
      accessor: "phone",
    },
    {
      key: "role",
      title: "Role",
      accessor: "role",
      render: (value: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            value === "ADMIN"
              ? "bg-purple-100 text-purple-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {value}
        </span>
      ),
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

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error loading users: {error.message}
      </div>
    );
  }

  return (
    <DataTable
      columns={columns}
      data={users}
      totalRecords={totalRecords}
      currentPage={currentPage}
      limit={limit}
      onPageChange={setCurrentPage}
      onlimitChange={setlimit}
      isLoading={loading}
    />
  );
};

export default AdminUserTable;
