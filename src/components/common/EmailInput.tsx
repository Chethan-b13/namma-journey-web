"use client";

import React from "react";
import { FiMail } from "react-icons/fi";

interface EmailInputProps {
  label: string;
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
  className,
}) => {
  return (
    <div className="relative flex flex-col">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex items-center gap-2 border rounded-md p-2">
        <FiMail className="text-gray-500" />
        <input
          type="email"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full text-body focus:outline-none"
        />
      </div>
    </div>
  );
};

export default EmailInput;
