import { SideBarListProps } from "@/libs/dummyData";
import React from "react";

const SideBarList: React.FC<SideBarListProps> = ({ items }) => {
  return (
    <div className="w-60 bg-white shadow-md rounded-lg p-4">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer 
              ${
                item.active ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"
              }`}
          >
            <item.icon className="text-gray-600 w-5 h-5" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBarList;
