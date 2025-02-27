"use client";

import React, { useState } from "react";
import InputField from "@/components/common/InputField";
import GoogleFormSection from "@/components/Auth/GoogleFormSection";
import { useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { handleEmailSignUp, handleGoogleAuth } from "@/services/authService";
import { UserRegistrationData } from "@/types/UserTypes";

const SignupPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // State for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userData: Partial<UserRegistrationData> = {
        firstName,
        lastName,
        email,
        phone,
        role: ["traveler"], // or whatever default role you want
      };

      await handleEmailSignUp(dispatch, email, password, userData);
      router.push("/");
    } catch (error) {
      setError("Signup failed. Try again.");
      console.error("Signup error:", error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await handleGoogleAuth(dispatch, true);
      router.push("/");
    } catch (error) {
      console.error("Google signup error:", error);
      setError("Google signup failed. Try again.");
    }
  };

  return (
    <div>
      <div className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <InputField
          label="First Name"
          placeholder="John"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          label="Last Name"
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputField
          label="Email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Phone"
          placeholder="123-456-7890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputField
          label="Password"
          placeholder="********"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          label="Confirm Password"
          placeholder="********"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <GoogleFormSection
          handleSignup={handleSignup}
          handleGoogleLogin={handleGoogleSignup}
          buttonText="Sign up"
          googleButtonText="Sign up with Google"
          isLoginPage={false}
        />
      </div>
    </div>
  );
};

export default SignupPage;
