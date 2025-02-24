"use client";

import React, { useState } from "react";
import InputField from "@/components/common/InputField";
import GoogleFormSection from "@/components/Auth/GoogleFormSection";
import { useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { handleGoogleLogin } from "@/services/authService";
import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser } from "@/app/api/authApis";

const SignupPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // State for inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState(""); // Optional, depending on your implementation
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const role = "admin";

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      const firebaseUID = user.uid;
      const idToken = await user.getIdToken();

      localStorage.setItem("authToken", idToken);

      try {
        // Call backend API to register user
        await registerUser(
          {
            firstName,
            lastName,
            email,
            firebaseUID,
            phone,
            role: ["admin"],
          },
          dispatch
        );

        router.push("/"); // Redirect on successful signup
      } catch (error) {
        setError("Signup failed. Try again.");
        console.error("Signup error:", error);
      }
    }
  };

  return (
    <div>
      <div className="space-y-4">
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
          handleGoogleLogin={() => handleGoogleLogin(dispatch, router)}
          buttonText="Sign up"
          googleButtonText="Sign up with Google"
          isLoginPage={false}
        />
      </div>
    </div>
  );
};

export default SignupPage;
