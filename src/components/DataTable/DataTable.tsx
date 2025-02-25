"use client";

import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import FilterBar from "../FilterWindow/FilterBar";
import TableSkeleton from "./TableSkeleton";
import { DataTablePropsType } from "@/types/DataTableTypes";

const DataTable: React.FC<DataTablePropsType> = ({
  columns,
  data = [],
  totalRecords = 0,
  currentPage = 1,
  limit = 10,
  onPageChange,
  onlimitChange,
  isLoading = false,
  filterConfig,
  activeFilters = {},
  setActiveFilters,
}) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(columns[0].key);
  const [sortOrder, setSortOrder] = useState("asc");

  if (isLoading) {
    return <TableSkeleton columns={columns} rows={5} actions={3} />;
  }

  // Add null check
  if (!data) {
    return null;
  }

  // calculate total pages
  const totalPages = Math.ceil(totalRecords / limit);

  // Filter & Sort Logic
  const filteredData = data
    .filter((item) => {
      // Search filter
      const matchesSearch = columns.some((col) => {
        if (!col.searchable) return false;
        return item[col.accessor]
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase());
      });

      // Applied filters
      const matchesFilters = Object.entries(activeFilters).every(
        ([key, value]) => {
          if (!value) return true;

          if (key === "createdAt") {
            const filterDate = new Date(value).setHours(0, 0, 0, 0);
            const itemDate = new Date(item[key]).setHours(0, 0, 0, 0);
            return filterDate === itemDate;
          }

          // Handle firstName and lastName specifically
          if (key === "firstname") {
            return item.firstName
              ?.toString()
              .toLowerCase()
              .includes(value.toLowerCase());
          }
          if (key === "lastname") {
            return item.lastName
              ?.toString()
              .toLowerCase()
              .includes(value.toLowerCase());
          }

          const itemValue = item[key]?.toString().toLowerCase();
          return itemValue?.includes(value.toLowerCase());
        }
      );

      return matchesSearch && matchesFilters;
    })
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

        <div className="flex items-center gap-2">
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
          {filterConfig && (
            <FilterBar
              title={filterConfig.title}
              filters={filterConfig.filters}
              onFilterApply={(filters) => {
                setActiveFilters?.(filters);
              }}
              onReset={() => {
                setActiveFilters?.({});
              }}
            />
          )}
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            {columns
              .filter((col) => !col.hidden)
              .map((col, index) => (
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
              {columns
                .filter((col) => !col.hidden)
                .map((col, colIndex) => (
                  <td key={colIndex} className="p-3 text-sm">
                    {col.render
                      ? col.render(item[col.accessor], item)
                      : item[col.accessor]}
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
            value={limit}
            onChange={(e) => onlimitChange?.(Number(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="text-sm text-gray-600">
          Showing {(currentPage - 1) * limit + 1} to{" "}
          {Math.min(currentPage * limit, totalRecords)} out of {totalRecords}{" "}
          records
        </div>

        <div className="flex gap-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 text-gray-600"
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`w-8 h-8 rounded-sm ${
                currentPage === index + 1
                  ? "border border-purple-500 text-purple-500 rounded-sm"
                  : "text-gray-600"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage * limit >= totalRecords}
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
