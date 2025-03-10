"use client";

import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FiLock } from "react-icons/fi";

interface PasswordInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  type?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState(false);

  const validatePassword = (password: string) => {
    if (!password && required) {
      setError("Password is required");
    } else if (password && password.length < 6) {
      setError("Password must be at least 6 characters long");
    }
    //else if (password && !/(?=.*[a-z])/.test(password)) {
    //   setError("Password must contain at least one lowercase letter");
    // } else if (password && !/(?=.*[A-Z])/.test(password)) {
    //   setError("Password must contain at least one uppercase letter");
    // } else if (password && !/(?=.*\d)/.test(password)) {
    //   setError("Password must contain at least one number");
    // } else if (password && !/(?=.*[@$!%*?&])/.test(password)) {
    //   setError("Password must contain at least one special character");
    // }
    else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (touched) {
      validatePassword(e.target.value);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validatePassword(value);
  };

  return (
    <div className="relative flex flex-col">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div
        className={`flex items-center gap-2 border rounded-md p-2 ${
          error ? "border-red-500" : touched && !error ? "border-green-500" : ""
        }`}
      >
        <FiLock
          className={`${
            error
              ? "text-red-500"
              : touched && !error
              ? "text-green-500"
              : "text-gray-500"
          }`}
        />
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          className="w-full text-body focus:outline-none bg-transparent"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className={`${
            error
              ? "text-red-500"
              : touched && !error
              ? "text-green-500"
              : "text-gray-500"
          } hover:text-gray-700 focus:outline-none`}
        >
          {showPassword ? (
            <IoIosEye className="w-5 h-5" />
          ) : (
            <IoIosEyeOff className="w-5 h-5" />
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
