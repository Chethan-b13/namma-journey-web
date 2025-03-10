"use client";

import React, { useState } from "react";
import { FiMail } from "react-icons/fi";

interface EmailInputProps {
  label?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const EmailInput: React.FC<EmailInputProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email && required) {
      setError("Email is required");
    } else if (email && !emailRegex.test(email)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (touched) {
      validateEmail(e.target.value);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    validateEmail(value);
  };

  return (
    <div className="relative flex flex-col">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div
        className={`flex items-center gap-2 border rounded-md p-2 ${
          error ? "border-red-500" : touched && !error ? "border-green-500" : ""
        }`}
      >
        <FiMail
          className={`${
            error
              ? "text-red-500"
              : touched && !error
              ? "text-green-500"
              : "text-gray-500"
          }`}
        />
        <input
          type="email"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          className="w-full text-body focus:outline-none bg-transparent"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default EmailInput;
