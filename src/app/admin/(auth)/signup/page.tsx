"use client";

import React, { useState } from "react";
import InputField from "@/components/common/InputField";
import GoogleFormSection from "@/components/Auth/GoogleFormSection";
import { useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { handleEmailSignUp, handleGoogleAuth } from "@/services/authService";
import { UserRegistrationData } from "@/types/UserTypes";
import PasswordInput from "@/components/common/PasswordInput";
import EmailInput from "@/components/common/EmailInput";

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

  const handleSignup = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }

    if (!email || !password || !confirmPassword) {
      setError("Please fill all required fields");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }

    try {
      const userData: Partial<UserRegistrationData> = {
        firstName,
        lastName,
        email,
        phone,
        role: ["admin"],
      };

      await handleEmailSignUp(dispatch, email, password, userData);
      setError(""); // Clear any existing errors
      return true; // Return success status
    } catch (error) {
      setError("Signup failed. Try again.");
      console.error("Signup error:", error);
      return false;
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await handleGoogleAuth(dispatch, true);
      router.push("/admin");
    } catch (error) {
      console.error("Google signup error:", error);
      setError("Google signup failed. Try again.");
    }
  };

  return (
    <div>
      <div className="space-y-4">
        {error && <p className="text-red-500 text-regular">{error}</p>}
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
        <EmailInput
          label="Email"
          name="email"
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
        <PasswordInput
          label="Password"
          name="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          placeholder="********"
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
