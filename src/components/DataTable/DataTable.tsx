"use client";

import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";


interface Column {
  key: string;
  title: string;
  accessor: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  totalRecords: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data = [],
  totalRecords = 0,
  currentPage = 1,
  pageSize = 10,
  onPageChange,
  onPageSizeChange,
}) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(columns[0].key);
  const [sortOrder, setSortOrder] = useState("asc");

  // Add null check
  if (!data) {
    return null;
  }

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
        <h2 className="text-xl font-semibold">Data Table</h2>

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
                {col.title} <FaSort className="inline ml-1 text-xs" />
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
                  {col.render ? col.render(item[col.accessor], item) : item[col.accessor]}
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

      <div className="flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Showing</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="text-sm text-gray-600">
          Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, totalRecords)} out of {totalRecords} records
        </div>

        <div className="flex gap-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 text-gray-600"
          >
            ‹
          </button>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-sm ${
                currentPage === page ? 'border border-purple-500 text-purple-500 rounded-sm' : 'text-gray-600'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage * pageSize >= totalRecords}
            className="px-2 py-1 text-gray-600"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
