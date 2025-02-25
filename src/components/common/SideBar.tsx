"use client";

import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import SideBarList from "./SideBarList";
import { sidebarItems } from "@/libs/dummyData";
import { logout } from "@/services/authService";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="flex-[0.2] p-4 bg-white h-full rounded-2xl shadow-lg">
      <div className="flex flex-col items-start space-y-8">
        <Logo logoWidth={45} logoHeight={45} logoTextSize="20px" />
        <Button className="w-full bg-primary text-regular font-medium">
          Create a Room +
        </Button>
        <Button
          className="w-full bg-primary text-regular font-medium"
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          Logout
        </Button>
        <SideBarList items={sidebarItems} />
      </div>
    </div>
  );
};

export default SideBar;
