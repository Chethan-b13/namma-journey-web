import React from "react";

interface TableSkeletonProps {
  columns: {
    key: string;
    width?: string;
  }[];
  rows?: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  columns,
  rows = 10,
}) => {
  return (
    <div className="w-full">
      {/* Table */}
      <div className="max-h-[75vh] overflow-y-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse rounded-lg">
          <thead className="sticky top-0 bg-background border-b border-gray-200 z-10">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className={`p-3 text-left ${col.width || ""}`}>
                  <div className="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {[...Array(rows)].map((_, rowIndex) => (
              <tr key={rowIndex} className="bg-background">
                {columns.map((col, i) => (
                  <td key={i} className={`px-3 py-2 ${col.width || ""}`}>
                    {col.key === "user" ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                          <div className="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <div className="w-16 h-5 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-8 h-5 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="w-64 h-5 bg-gray-200 rounded animate-pulse"></div>
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"
            ></div>
          ))}
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
