"use client";

import { FilterBarPropsType } from "@/types/DataTableTypes";
import { useState } from "react";
import { CgOptions } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
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
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open sidebar */}
      <button
        className="border p-2 rounded-lg flex items-center justify-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <CgOptions className="size-4" />
        <span className="text-body font-body">Filter</span>
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
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-subheading font-subheading">{title}</h2>
            <button className="text-gray-500" onClick={() => setIsOpen(false)}>
              <IoMdClose className="size-5" />
            </button>
          </div>

          {/* Filters */}
          <div className="flex-1 overflow-y-auto">
            {filters.map((filter) => (
              <div key={filter.id} className="mb-6">
                <h3 className="text-body font-body mb-3">{filter.label}</h3>
                {filter.type === "select" && (
                  <div className="flex flex-wrap gap-2">
                    {filter.options?.map((option) => (
                      <button
                        key={option}
                        className={`px-3 py-2 text-body font-body rounded-lg ${
                          selectedValues[filter.id] === option
                            ? "bg-primary "
                            : "bg-gray-100"
                        } transition-all duration-300 ease-in-out`}
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
                    className="w-full border p-2 rounded-lg text-body font-body"
                    value={selectedValues[filter.id] || ""}
                    onChange={(e) =>
                      handleValueChange(filter.id, e.target.value)
                    }
                  />
                )}
                {filter.type === "text" && (
                  <input
                    type="text"
                    placeholder={filter.placeholder}
                    className="w-full border p-2 rounded-lg text-body font-body"
                    value={selectedValues[filter.id] || ""}
                    onChange={(e) =>
                      handleValueChange(filter.id, e.target.value)
                    }
                  />
                )}
              </div>
            ))}
          </div>

          {/* Footer Buttons */}
          <div className="pt-4 border-t flex gap-3">
            <button
              className="flex-1 bg-primary p-2 rounded-lg text-body font-body hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={handleApply}
            >
              Apply Filters
            </button>
            <button
              className="flex-1 bg-gray-100 p-2 rounded-lg text-body font-body hover:scale-105 transition-all duration-300 ease-in-out"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterBar;
