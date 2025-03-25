"use client";

import React from "react";
import Image from "next/image";
import onBoarding from "../../../../public/images/login-bag.svg";
import Logo from "@/components/common/Logo";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex items-start lg:items-center justify-center flex-1 lg:space-x-[100px]">
        <Image
          src={onBoarding}
          alt="namma journey onboarding illustration"
          className="hidden lg:block"
        />
        <div className="p-4 flex flex-col w-screen lg:p-8 space-y-8 lg:w-[450px] md:w-[600px]">
          <div className="space-y-4">
            <Logo />
            <p className="text-regular">
              Plan, manage, and grow your travel business effortlessly.
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
