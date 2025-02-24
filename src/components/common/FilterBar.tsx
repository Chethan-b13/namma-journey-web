"use client";

import { colors, priceRanges, sizes } from "@/libs/dummyData";
import { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const roles = ["Traveler", "Admin", "Manager", "Support"];

const Filterbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <>
      {/* Button to open sidebar */}
      <button
        className="bg-primary p-2 rounded-lg shadow-md size-10 flex items-center justify-center"
        onClick={() => setIsOpen(true)}
      >
        <FaFilter className="size-4" />
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
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 z-20 transform ${
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
        <h2 className="text-lg font-semibold mb-4">User Filters</h2>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search by name, email..."
            className="w-full p-2 pl-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <FiSearch className="absolute left-2 top-3 text-gray-400" />
        </div>

        {/* Role Filter */}
        <h3 className="text-sm font-semibold mb-2">Role</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {roles.map((role) => (
            <button
              key={role}
              className={`px-3 py-1 text-xs rounded-md ${
                selectedRole === role
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Last Login */}
        <h3 className="text-sm font-semibold mb-2">Last Login</h3>
        <input type="date" className="w-full border p-2 rounded-md mb-4" />

        {/* Phone Number */}
        <h3 className="text-sm font-semibold mb-2">Phone Number</h3>
        <input
          type="text"
          placeholder="Enter phone number"
          className="w-full border p-2 rounded-md mb-4"
        />

        {/* Reset Button */}
        <button className="w-full bg-primary  p-2 rounded-lg mt-5">
          Reset
        </button>
      </aside>
    </>
  );
};

export default Filterbar;
