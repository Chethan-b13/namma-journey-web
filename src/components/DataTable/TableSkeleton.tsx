import React from "react";

interface TableSkeletonProps {
  columns: {
    key: string;
    width?: string;
    hasImage?: boolean;
    hasSubtext?: boolean;
  }[];
  rows?: number;
  actions?: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  columns,
  rows = 5,
  actions = 0,
}) => {
  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-lg animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="h-8 bg-gray-200 rounded w-48"></div>
        <div className="flex items-center gap-2">
          <div className="w-64 h-10 bg-gray-200 rounded-md"></div>
          <div className="w-32 h-10 bg-gray-200 rounded-md"></div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full">
        {/* Header Row */}
        <div className="bg-gray-100 rounded-t-lg">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${
                columns.length + (actions ? 1 : 0)
              }, 1fr)`,
            }}
          >
            {columns.map((col, i) => (
              <div key={i} className={`p-3 ${col.width || ""}`}>
                <div className="h-6 bg-gray-200 rounded"></div>
              </div>
            ))}
            {actions > 0 && (
              <div className="p-3">
                <div className="h-6 bg-gray-200 rounded"></div>
              </div>
            )}
          </div>
        </div>

        {/* Table Rows */}
        {[...Array(rows)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={`border-b ${
              rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
            } p-3`}
          >
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${
                  columns.length + (actions ? 1 : 0)
                }, 1fr)`,
              }}
            >
              {columns.map((col, i) => (
                <div key={i} className={`${col.width || ""}`}>
                  {col.hasImage ? (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                      {col.hasSubtext && (
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-32"></div>
                          <div className="h-3 bg-gray-200 rounded w-24"></div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-4 bg-gray-200 rounded"></div>
                  )}
                </div>
              ))}
              {actions > 0 && (
                <div className="flex gap-2">
                  {[...Array(actions)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gray-200 rounded"></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 p-2">
        <div className="w-32 h-8 bg-gray-200 rounded"></div>
        <div className="w-64 h-8 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
