"use client";

import React, { useState } from "react";
import InputField from "@/components/common/InputField";
import GoogleFormSection from "@/components/Auth/GoogleFormSection";
import { emailLogin, googleLogin } from "@/services/authService";
import { setUser } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleEmailLogin = async () => {
    try {
      const user = await emailLogin(email, password);
      const token = await user.getIdToken();
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          token,
        })
      );
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await googleLogin();
      const token = await user.getIdToken();
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          token,
        })
      );
      router.push("/");
    } catch (error) {
      console.error("Google Login Failed:", error);
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
          handleEmailLogin={handleEmailLogin}
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
