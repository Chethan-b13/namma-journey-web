"use client";

import { usersTable, UserTableData } from "@/libs/dummyData";
import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const UserTable: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("firstName");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Filter & Sort Logic
  const filteredUsers = usersTable
    .filter((user) =>
      `${user.firstName} ${user.lastName} ${user.email} ${user.phone}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const valueA =
        a[sortBy as keyof UserTableData]?.toString().toLowerCase() || "";
      const valueB =
        b[sortBy as keyof UserTableData]?.toString().toLowerCase() || "";
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">User List</h2>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            className="w-64 p-2 pl-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute left-2 top-3 text-gray-400" />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            {[
              "First Name",
              "Last Name",
              "Email",
              "Phone",
              "Role",
              "Last Login",
            ].map((header, index) => (
              <th
                key={index}
                className="p-3 text-left text-sm font-semibold cursor-pointer"
                onClick={() => {
                  setSortBy(
                    header.toLowerCase().replace(" ", "") as keyof UserTableData
                  );
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                }}
              >
                {header} <FaSort className="inline ml-1 text-xs" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              {/* First Name */}
              <td className="p-3 text-sm flex items-center gap-3">
                <img
                  src={user.profilePic || "/default-avatar.png"}
                  alt={user.firstName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                {user.firstName}
              </td>

              {/* Last Name */}
              <td className="p-3 text-sm">{user.lastName}</td>

              {/* Email */}
              <td className="p-3 text-sm">{user.email}</td>

              {/* Phone */}
              <td className="p-3 text-sm">{user.phone}</td>

              {/* Role */}
              <td className="p-3 text-sm">
                {user.role.map((r) => (
                  <span
                    key={r}
                    className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs"
                  >
                    {r}
                  </span>
                ))}
              </td>

              {/* Last Login */}
              <td className="p-3 text-sm">{user.lastLogin || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* No Results Message */}
      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No users found.</p>
      )}
    </div>
  );
};

export default UserTable;
