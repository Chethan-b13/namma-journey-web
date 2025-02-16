import React from "react";
import Button from "@/components/common/Button";
import HorizontalLine from "@/components/common/HorizontalLine";
import { FcGoogle } from "react-icons/fc";

interface GoogleFormSectionProps {
  children?: React.ReactNode;
  buttonText: string;
  googleButtonText: string;
  isLoginPage: boolean;
  handleEmailLogin?: () => void;
  handleSignup?: () => void;
  handleGoogleLogin: () => void;
}

const GoogleFormSection: React.FC<GoogleFormSectionProps> = ({
  children,
  buttonText,
  googleButtonText,
  isLoginPage,
  handleEmailLogin,
  handleSignup,
  handleGoogleLogin,
}) => {
  return (
    <div className="space-y-4">
      {children}

      <Button
        className="w-full bg-black text-white"
        onClick={isLoginPage ? handleEmailLogin : handleSignup}
      >
        {buttonText}
      </Button>

      <div className="space-y-4">
        <div className="w-full flex items-center justify-center gap-4">
          <HorizontalLine />
          <p className="text-[14px] text-gray-400">Or</p>
          <HorizontalLine />
        </div>
        <Button
          className={`bg-[#F3F9FA] flex items-center justify-center text-black w-full`}
          onClick={handleGoogleLogin}
        >
          <FcGoogle size={20} />
          <span className="ml-2">{googleButtonText}</span>
        </Button>
      </div>

      {isLoginPage ? (
        <div className="flex items-center justify-center space-x-2">
          <p className="text-[14px] text-gray-400">Don't have an account?</p>
          <a href="/signup" className="text-link text-[14px]">
            Sign up
          </a>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-2">
          <p className="text-[14px] text-gray-400">Already have an account?</p>
          <a href="/login" className="text-link text-[14px]">
            Login
          </a>
        </div>
      )}
    </div>
  );
};

export default GoogleFormSection;
