"use client";

import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import ClickAwayListener from "./ClickAwayListener";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { handleLogout } from "@/services/authService";

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div className="w-full p-2 flex items-center justify-between border mb-4 rounded-lg">
      {/* Left section with logo */}
      <div className="flex items-center gap-8">
        <div className="relative">
          <Select defaultValue="travels">
            <SelectTrigger className="w-[130px] border-none shadow-none text-regular font-body text-gray-700">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="travels">Travels</SelectItem>
              <SelectItem value="rooms">Rooms</SelectItem>
              <SelectItem value="transport">Transport</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Center section with search */}
        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-background rounded-lg text-regular font-body focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Right section with notifications and profile */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <FiBell className="text-xl text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </button>
        <ClickAwayListener onClickAway={() => setShowUserMenu(false)}>
          <div className="relative">
            <button
              className="flex items-center gap-3"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="text-left">
                <p className="text-regular font-body text-gray-500">
                  Welcome, {user?.firstName} {user?.lastName}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={user?.profilePic || "/images/default-avatar.png"}
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </button>

            {/* User menu popup */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <a
                  href="/profile"
                  className="block px-4 py-2 text-regular hover:bg-gray-50"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-regular hover:bg-gray-50"
                >
                  Settings
                </a>
                <hr className="my-2" />
                <button
                  onClick={() => {
                    handleLogout(dispatch);
                    router.push("/login");
                  }}
                  className="block w-full text-left px-4 py-2 text-regular text-red-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default Header;
