import React, { useState, useRef } from "react";
import Image from "next/image";
import { FiPhone, FiTrash2 } from "react-icons/fi";
import EmailInput from "../common/EmailInput";

const AVAILABLE_ROLES = [
  "admin",
  "agency",
  "traveler",
  "travel partner",
] as const;

interface UserProfileModalProps {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePic?: string;
    phone?: string;
    role?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
  onSave: (userData: any) => void;
  onDelete: (userId: string) => void;
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  user,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) => {
  const [userData, setUserData] = useState(
    user || {
      firstName: "",
      lastName: "",
      email: "",
      profilePic: "",
      _id: "",
      phone: "",
      role: [],
    }
  );

  // Update userData when user prop changes
  React.useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRoleToggle = (role: string) => {
    const currentRoles = userData.role || [];
    const newRoles = currentRoles.includes(role)
      ? currentRoles.filter((r) => r !== role)
      : [...currentRoles, role];
    setUserData({ ...userData, role: newRoles });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className="fixed inset-x-0 top-[10%] mx-auto max-w-md bg-white rounded-lg shadow-xl z-50 p-4">
        {/* Header */}
        <div className="flex justify-between items-center gap-2 mb-4 p-4 bg-gray-200">
          {/* Title */}
          <div>
            <h2 className="text-subheading font-medium">
              {userData.firstName} {userData.lastName}
            </h2>
            <p className="text-body text-gray-500">{userData.email}</p>
          </div>

          <Image
            src={userData.profilePic || "/images/default-avatar.png"}
            alt="Profile"
            className="size-16 rounded-full object-cover"
            width={40}
            height={40}
          />
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-body mb-1">Name</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={userData.firstName}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
                className="w-full px-2 py-1.5 border rounded text-body"
                placeholder="Amelie"
              />
              <input
                type="text"
                value={userData.lastName}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
                className="w-full px-2 py-1.5 border rounded text-body"
                placeholder="Laurent"
              />
            </div>
          </div>

          <div>
            <label className="block text-body mb-1">Email address</label>
            <EmailInput
              name="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-body mb-1">Phone number</label>
            <div className="flex items-center border rounded p-2">
              <FiPhone className="text-gray-500" />
              <input
                type="tel"
                value={userData.phone || ""}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                className="flex-1 px-2 focus:outline-none text-body"
                placeholder="9876543210"
              />
            </div>
          </div>

          <div>
            <label className="block text-body mb-1">Role</label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_ROLES.map((role) => (
                <button
                  key={role}
                  onClick={() => handleRoleToggle(role)}
                  className={`px-3 py-1 rounded-full text-body font-medium transition-colors ${
                    userData.role?.includes(role)
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-body mb-1">Profile photo</label>
            <div className="flex items-center gap-2">
              <Image
                src={userData.profilePic || "/images/default-avatar.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
                width={40}
                height={40}
              />
              <button
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
                    setUserData({ ...userData, profilePic: url });
                  }
                }}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t">
          <button
            onClick={() => onDelete(user._id)}
            className="text-red-600 text-body hover:text-red-700 font-medium"
          >
            <div className="flex items-center gap-1">
              <FiTrash2 className="size-3" />
              <span>Delete user</span>
            </div>
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-3 py-2 text-body border rounded hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => onSave(userData)}
              className="px-3 py-2 text-body bg-black text-white rounded"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileModal;
