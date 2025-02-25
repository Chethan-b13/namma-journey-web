"use client";

import { FilterBarPropsType } from "@/types/DataTableTypes";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgOptions } from "react-icons/cg";

const FilterBar: React.FC<FilterBarPropsType> = ({
  title,
  filters,
  onFilterApply,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );

  const handleValueChange = (filterId: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [filterId]: value }));
  };

  const handleApply = () => {
    onFilterApply(selectedValues);
    setIsOpen(false);
  };

  const handleReset = () => {
    setSelectedValues({});
    onReset();
  };

  return (
    <>
      {/* Button to open sidebar */}
      <button
        className="border p-2 rounded-lg flex items-center justify-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <CgOptions className="size-4" />
        <span className="text-regular font-body">Filter</span>
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-4 z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes className="size-5" />
        </button>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        {filters.map((filter) => (
          <div key={filter.id} className="mb-4">
            <h3 className="text-sm font-semibold mb-2">{filter.label}</h3>
            {filter.type === "select" && (
              <div className="flex flex-wrap gap-2">
                {filter.options?.map((option) => (
                  <button
                    key={option}
                    className={`px-3 py-1 text-xs rounded-md ${
                      selectedValues[filter.id] === option
                        ? "bg-purple-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handleValueChange(filter.id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            {filter.type === "date" && (
              <input
                type="date"
                className="w-full border p-2 rounded-md"
                value={selectedValues[filter.id] || ""}
                onChange={(e) => handleValueChange(filter.id, e.target.value)}
              />
            )}
            {filter.type === "text" && (
              <input
                type="text"
                placeholder={filter.placeholder}
                className="w-full border p-2 rounded-md"
                value={selectedValues[filter.id] || ""}
                onChange={(e) => handleValueChange(filter.id, e.target.value)}
              />
            )}
          </div>
        ))}

        {/* Add Apply and Reset buttons */}
        <div className="flex gap-2 mt-5">
          <button
            className="flex-1 bg-primary p-2 rounded-lg"
            onClick={handleApply}
          >
            Apply Filters
          </button>
          <button
            className="flex-1 bg-gray-200 p-2 rounded-lg"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </aside>
    </>
  );
};

export default FilterBar;
