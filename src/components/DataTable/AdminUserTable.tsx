"use client";

import React, { useState } from "react";
import DataTable from "./DataTable";
import { useUsers } from "@/hooks/useUsers";
import { userFiltersConfig } from "../FilterWindow/UserFilterConfig";
import { UserTableColumns } from "./constants/AdminUserConstants";
import { ColumnType } from "@/types/DataTableTypes";
import UserProfileModal from "../UserProfile/UserProfileModal";

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
  } = useUsers();

  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <>
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
      />

      <UserProfileModal
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </>
  );
};

export default AdminUserTable;
