"use client";

import React, { useState } from "react";
import InputField from "@/components/common/InputField";
import GoogleFormSection from "@/components/Auth/GoogleFormSection";
import { useAppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { emailSignUp, googleLogin } from "@/services/authService";
import { setUser } from "@/store/authSlice";
import api from "@/utils/axios";
import { auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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

      try {
        // Call backend API to register user
        const response = await api.post("/api/auth/register", {
          firstName,
          lastName,
          email,
          firebaseUID,
          phone,
          password,
          profilePic,
          role,
        });

        // Assuming the API response includes user data and token
        const { user, token } = response.data;

        dispatch(
          setUser({
            uid: user.firebaseUID,
            email: user.email,
            displayName: `${user.firstName} ${user.lastName}`,
            photoURL: user.profilePic,
            token,
          })
        );

        router.push("/"); // Redirect on successful signup
      } catch (error) {
        setError("Signup failed. Try again.");
        console.error("Signup error:", error);
      }
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
          handleGoogleLogin={handleGoogleLogin}
          buttonText="Sign up"
          googleButtonText="Sign up with Google"
          isLoginPage={false}
        />
      </div>
    </div>
  );
};

export default SignupPage;
