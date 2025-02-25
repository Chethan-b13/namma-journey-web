import { sidebarItems } from "@/types/SidebarTypes";
import Link from "next/link";
import React from "react";

const SideBarList: React.FC = () => {
  return (
    <nav className="flex flex-col gap-2 w-full">
      {sidebarItems.map((item, index) => (
        <Link href={item.path} key={index}>
          <div
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
              ${item.active ? "bg-sidebar font-medium" : "hover:bg-sidebar"}`}
          >
            <item.icon
              className={`size-4 ${
                item.active ? "text-black" : "text-gray-400"
              }`}
            />
            <span className="text-regular font-medium">{item.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default SideBarList;
