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

const AdminUserTable: React.FC = () => {
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
    await updateUser(userData);
    setIsModalOpen(false);
  };

  const handleDelete = async (userId: string) => {
    await deleteUser(userId);
    setIsModalOpen(false);
  };

  const handleCreateUser = async (userData: any) => {
    try {
      await createUser(userData);
      setIsCreateModalOpen(false);
      return true;
    } catch (error) {
      console.error("Error creating user:", error);
      // You might want to show an error message to the user here
      return false;
    }
  };

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error loading users: {error.message}
      </div>
    );
  }

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
