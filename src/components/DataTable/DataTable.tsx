"use client";

import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import FilterBar from "../FilterWindow/FilterBar";
import TableSkeleton from "./TableSkeleton";
import { DataTablePropsType } from "@/types/DataTableTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userTableSkeletonColumns } from "./constants/AdminUserConstants";
import UserProfileModal from "../UserProfile/UserProfileModal";

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
}) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(columns[0].key);
  const [sortOrder, setSortOrder] = useState("asc");
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(
    {}
  );
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="w-full">
      {/* Modal */}
      <UserProfileModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(userData) => {
          // Handle save logic here
          setIsModalOpen(false);
        }}
        onDelete={(userId) => {
          // Handle delete logic here
          setIsModalOpen(false);
        }}
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-2 px-2">
        <h2 className="font-subheading text-subheading">Data Table</h2>

        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-96 p-2 pl-8 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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

      {isLoading ? (
        <TableSkeleton columns={userTableSkeletonColumns} rows={10} />
      ) : (
        <>
          <div className="max-h-[75vh] overflow-y-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full border-collapse rounded-2xl">
              <thead className="sticky top-0 bg-background border-b border-gray-200">
                <tr>
                  {columns
                    .filter((col) => !col.hidden)
                    .map((col, index) => (
                      <th
                        key={index}
                        className="p-3 text-left text-regular font-body cursor-pointer"
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
                  <tr key={index} className={`bg-background`}>
                    {columns
                      .filter((col) => !col.hidden)
                      .map((col, colIndex) => (
                        <td
                          key={colIndex}
                          className="px-3 py-2 text-body font-body"
                        >
                          {col.render
                            ? col.render(item[col.accessor], item)
                            : item[col.accessor]}
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* No Results Message */}
          {filteredData.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No data found.</p>
          )}

          <div className="flex items-center justify-between py-4 px-2">
            <div className="flex items-center gap-2">
              <span className="text-body text-gray-600">Showing</span>
              <Select
                value={limit.toString()}
                onValueChange={(value: string) =>
                  onlimitChange?.(Number(value))
                }
              >
                <SelectTrigger className="border rounded-full px-2 py-1 text-small font-body bg-background focus:outline-none focus:ring-1 focus:ring-gray-300 w-[50px] h-[25px]">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-body text-gray-600">
              Showing {(currentPage - 1) * limit + 1} to{" "}
              {Math.min(currentPage * limit, totalRecords)} out of{" "}
              {totalRecords} records
            </div>

            <div className="flex gap-1 items-center">
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
                  className={`w-6 h-6 rounded-full ${
                    currentPage === index + 1
                      ? "border border-gray-300 text-body  rounded-full"
                      : "text-gray-600 text-small"
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
        </>
      )}
    </div>
  );
};

export default DataTable;
