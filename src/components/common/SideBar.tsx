import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import SideBarList from "./SideBarList";

const SideBar = () => {
  return (
    <div className="flex-[0.2] p-4 bg-white h-full rounded-lg shadow-lg">
      <div className="flex flex-col items-start space-y-8">
        <Logo logoWidth={125} logoHeight={125} logoTextSize="20px" />
        <Button className="w-full bg-primary text-regular font-medium h-[40px]">
          Create a Room +
        </Button>
        <SideBarList />
      </div>
    </div>
  );
};

export default SideBar;
