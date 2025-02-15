"use client";

import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { DataTableProps } from "@/libs/dummyData";

const DataTable: React.FC<DataTableProps> = ({ data, columns, title }) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(columns[0].accessor);
  const [sortOrder, setSortOrder] = useState("asc");

  // Filter & Sort Logic
  const filteredData = data
    .filter((item) =>
      columns.some((col) =>
        item[col.accessor]
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      const valueA = a[sortBy]?.toString().toLowerCase() || "";
      const valueB = b[sortBy]?.toString().toLowerCase() || "";
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title || "Data Table"}</h2>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
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
            {columns.map((col, index) => (
              <th
                key={index}
                className="p-3 text-left text-sm font-semibold cursor-pointer"
                onClick={() => {
                  setSortBy(col.accessor);
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                }}
              >
                {col.label} <FaSort className="inline ml-1 text-xs" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item, index) => (
            <tr
              key={index}
              className={`border-b ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="p-3 text-sm">
                  {col.type === "image" ? (
                    <Image
                      src={item[col.accessor] || "/default-avatar.png"}
                      alt={col.label}
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                  ) : col.type === "array" ? (
                    item[col.accessor].map((val: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-xs mr-1"
                      >
                        {val}
                      </span>
                    ))
                  ) : (
                    item[col.accessor] || "N/A"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* No Results Message */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No data found.</p>
      )}
    </div>
  );
};

export default DataTable;
