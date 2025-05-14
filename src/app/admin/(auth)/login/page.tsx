"use client";

import React, { useState } from "react";
import GoogleFormSection from "@/components/Auth/GoogleFormSection";
import { handleEmailSignIn, handleGoogleAuth } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import PasswordInput from "@/components/common/PasswordInput";
import EmailInput from "@/components/common/EmailInput";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleEmailLogin = async (email: string, password: string) => {
    try {
      await handleEmailSignIn(dispatch, email, password);
      router.push("/admin");
    } catch (error) {
      // Handle error (show toast, etc.)
      console.error(error); // Add this to use the error variable
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await handleGoogleAuth(dispatch, false);
      router.push("/admin");
    } catch (error) {
      // Handle error
      console.error(error); // Add this to use the error variable
    }
  };

  return (
    <div>
      <div className="space-y-4">
        <EmailInput
          label="Email"
          name="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label="Password"
          name="password"
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
