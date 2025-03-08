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
  className,
  type,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex flex-col">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex items-center gap-2 border rounded-md p-2">
        <FiLock className="text-gray-500" />
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full text-body focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showPassword ? (
            <IoIosEye className="w-5 h-5" />
          ) : (
            <IoIosEyeOff className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
