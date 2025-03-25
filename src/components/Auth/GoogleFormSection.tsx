import React, { useState } from "react";
import Button from "@/components/common/Button";
import HorizontalLine from "@/components/common/HorizontalLine";
import { FcGoogle } from "react-icons/fc";
import SuccessModal from "@/components/UserProfile/SuccessModal";
import { useRouter } from "next/navigation";

interface GoogleFormSectionProps {
  children?: React.ReactNode;
  buttonText: string;
  googleButtonText: string;
  isLoginPage: boolean;
  handleEmailLogin?: () => void;
  handleSignup?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<boolean>;
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
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignupClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (handleSignup) {
      try {
        const success = await handleSignup(e);
        if (success) {
          setIsSuccess(true);
        }
      } catch (error) {
        console.error("Signup error:", error);
      }
    }
  };

  const handleSuccessClose = () => {
    setIsSuccess(false);
    router.push("/admin");
  };

  return (
    <div className="space-y-4">
      {children}

      <Button
        className="w-full bg-black text-white"
        onClick={isLoginPage ? handleEmailLogin : handleSignupClick}
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

      {isSuccess && (
        <SuccessModal
          message="Your account has been created successfully! Please log in to continue."
          buttonText="Get started"
          onClose={handleSuccessClose}
        />
      )}
    </div>
  );
};

export default GoogleFormSection;
