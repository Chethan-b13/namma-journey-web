"use client";

import React, { useState } from "react";
import DataTable from "./DataTable";
import { useUsers } from "@/hooks/useUsers";
import { userFiltersConfig } from "../FilterWindow/UserFilterConfig";
import { UserTableColumns } from "./constants/AdminUserConstants";
import { ColumnType } from "@/types/DataTableTypes";
import UserProfileModal from "../UserProfile/UserProfileModal";
import UserCreationModal from "../UserProfile/UserCreationModal";
import { FiUserPlus } from "react-icons/fi";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

const AdminUserTable: React.FC = () => {
  const queryClient = useQueryClient();
  const {
    users,
    loading,
    error,
    totalRecords,
    currentPage,
    limit,
    setCurrentPage,
    setlimit,
    updateUser,
    deleteUser,
    createUser,
  } = useUsers();

  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleViewClick = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = async (userData: any) => {
    try {
      const success = await updateUser(userData);
      if (success) {
        toast.success("User profile has been updated successfully!");
        setIsModalOpen(false);
      }
      return success;
    } catch (error) {
      toast.error("Error updating user.");
      console.error("Error updating user:", error);
      return false;
    }
  };

  const handleDelete = async (userId: string) => {
    await deleteUser(userId);
    toast.success("User deleted successfully!");
    setIsModalOpen(false);
  };

  const handleCreateUser = async (userData: any) => {
    try {
      // Call backend API to create a new user
      const newUser = await createUser(userData);

      if (newUser) {
        // Update React Query cache instead of refetching all users
        queryClient.setQueryData(["users"], (oldData: any) => {
          if (!oldData || !oldData.users)
            return { users: [newUser], totalUsers: 1 };

          return {
            ...oldData,
            users: [newUser, ...oldData.users], // Add new user at the top
            totalUsers: (oldData.totalUsers ?? 0) + 1, // Update total count
          };
        });

        toast.success("User created successfully!");
        setIsCreateModalOpen(false);
      }
      return true;
    } catch (error) {
      toast.error("Error creating user.");
      console.error("Error creating user:", error);
      return false;
    }
  };

  // Add onViewClick to each user object
  const enhancedUsers = users?.map((user) => ({
    ...user,
    onViewClick: handleViewClick,
  }));

  const addUserButton = (
    <button
      onClick={() => setIsCreateModalOpen(true)}
      className="border border-gray-300 px-4 py-2 text-body rounded-lg flex items-center gap-2 hover:bg-primary/90 hover:border-primary transition-all duration-300"
    >
      <FiUserPlus className="size-3" />
      <span>Add User</span>
    </button>
  );

  return (
    <div className="space-y-4">
      <DataTable
        columns={UserTableColumns as ColumnType[]}
        data={enhancedUsers}
        totalRecords={totalRecords}
        currentPage={currentPage}
        limit={limit}
        onPageChange={setCurrentPage}
        onlimitChange={setlimit}
        isLoading={loading}
        filterConfig={{
          title: "User Filters",
          filters: userFiltersConfig,
        }}
        actionButton={addUserButton}
      />

      <UserProfileModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        onDelete={handleDelete}
      />

      <UserCreationModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateUser}
      />
    </div>
  );
};

export default AdminUserTable;
