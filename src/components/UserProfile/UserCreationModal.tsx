"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FiLock, FiMail, FiPhone } from "react-icons/fi";
interface UserCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (userData: any) => void;
}

const UserCreationModal: React.FC<UserCreationModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: ["traveler"],
    profilePic: "",
    password: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (selectedRole: string) => {
    setFormData((prev) => {
      const currentRoles = prev.role || [];
      const updatedRoles = currentRoles.includes(selectedRole)
        ? currentRoles.filter((role) => role !== selectedRole)
        : [...currentRoles, selectedRole];
      return {
        ...prev,
        role: updatedRoles.length > 0 ? updatedRoles : ["traveler"], // Keep at least one role
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a new user object with all required fields
    const newUser = {
      ...formData,
      createdAt: new Date().toISOString(), // Add creation date
    };
    onSave(newUser);
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: ["traveler"],
      profilePic: "",
      password: "",
    });
  };

  if (!isOpen) return null;

  const availableRoles = ["admin", "agency", "traveler", "travel partner"];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-30">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative bg-white rounded-lg p-6 w-[500px] mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className="size-15 rounded-full bg-gray-100 overflow-hidden">
              {formData.profilePic ? (
                <Image
                  src={formData.profilePic}
                  alt="Profile"
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/default-avatar.png"
                    alt="Default Profile"
                    width={50}
                    height={50}
                  />
                </div>
              )}
            </div>
            <div>
              <h2 className="text-md font-medium">
                {formData.firstName || formData.lastName
                  ? `${formData.firstName} ${formData.lastName}`
                  : "New User"}
              </h2>
              <p className="text-xs text-gray-500">{formData.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full p-2 border text-body rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full p-2 border text-body rounded-lg focus:outline-none "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email address
                </label>
                <div className="flex items-center gap-2 border rounded-md p-2">
                  <FiMail className="text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full text-body focus:outline-none "
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <div className="flex items-center gap-2 border rounded-md p-2">
                  <FiLock className="text-gray-500" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    className="w-full text-body focus:outline-none "
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone number
                </label>
                <div className="flex items-center gap-2 border rounded-md p-2">
                  <FiPhone className="text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full text-body  focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <div className="flex flex-wrap gap-2">
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => handleRoleChange(role)}
                      className={`px-3 py-1 rounded-full text-body ${
                        formData.role.includes(role)
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Profile photo
                </label>
                <div className="flex items-center gap-2">
                  <Image
                    src={formData.profilePic || "/images/default-avatar.png"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                    width={40}
                    height={40}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-body text-gray-600 hover:bg-gray-50 rounded px-2 py-1"
                  >
                    Click to replace
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setFormData((prev) => ({ ...prev, profilePic: url }));
                      }
                    }}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-body font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-body font-medium text-white bg-black rounded-lg hover:bg-gray-800"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreationModal;
