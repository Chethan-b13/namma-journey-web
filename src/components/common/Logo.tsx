import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo_web.png";

interface LogoProps {
  logoHeight?: number;
  logoWidth?: number;
  logoTextSize?: string;
}

const Logo: React.FC<LogoProps> = ({
  logoHeight = 70,
  logoWidth = 70,
  logoTextSize = "30px",
}) => {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="namma journey logo"
        width={`${logoWidth}`}
        height={`${logoHeight}`}
      />
      {/* <p className={`text-[${logoTextSize}] font-heading font-semibold`}>
        namma journey
      </p> */}
    </div>
  );
};

export default Logo;
