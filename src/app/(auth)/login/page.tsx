"use client";

import React, { useState } from "react";
import InputField from "@/components/common/InputField";
import GoogleFormSection from "@/components/Auth/GoogleFormSection";
import { handleEmailSignIn, handleGoogleAuth } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleEmailLogin = async (email: string, password: string) => {
    try {
      await handleEmailSignIn(dispatch, email, password);
      router.push("/");
    } catch (error) {
      // Handle error (show toast, etc.)
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await handleGoogleAuth(dispatch, false);
      router.push("/");
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <div className="space-y-4">
        <InputField
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end">
          <a href="#" className="text-link text-[14px]">
            Forgot password?
          </a>
        </div>
        <GoogleFormSection
          handleEmailLogin={() => handleEmailLogin(email, password)}
          handleGoogleLogin={handleGoogleLogin}
          buttonText="Login"
          googleButtonText="Sign in with Google"
          isLoginPage={true}
        />
      </div>
    </div>
  );
};

export default LoginPage;
