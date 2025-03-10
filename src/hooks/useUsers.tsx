"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AdminUsersResponse } from "@/types/UserTypes";
import { useState } from "react";
import api from "@/config/axios";

export const useUsers = () => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setlimit] = useState(10);

  const { data, isLoading, error } = useQuery<AdminUsersResponse, Error>({
    queryKey: ["users", currentPage, limit],
    queryFn: async () => {
      const response = await api.get(
        `/admin/users/?page=${currentPage}&limit=${limit}`
      );
      return response.data;
    },
  });

  const createUser = async (userData: any) => {
    try {
      const response = await api.post("/admin/users", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        profilePic: "http://picsum.photos/id/18/600/600",
        role: userData.role,
        password: userData.password,
      });

      return response.data.user; // Return the created user data
    } catch (error: any) {
      console.error("Error creating user:", {
        error,
        response: error.response,
        status: error?.response?.status,
        data: error?.response?.data,
        message: error?.message,
      });
      throw new Error(
        error?.response?.data?.error ||
          error?.message ||
          "Failed to create user"
      );
    }
  };

  const updateUser = async (userData: any) => {
    if (!userData || !userData._id) {
      throw new Error("Invalid user data provided");
    }
    try {
      const response = await api.put(`/admin/users/${userData._id}`, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        profilePic: userData.profilePic,
        role: userData.role || [],
      });

      await queryClient.invalidateQueries({ queryKey: ["users"] });
      return response.data;
    } catch (error: any) {
      console.error("Error updating user:", error);
      throw new Error(
        error?.response?.data?.error ||
          error?.message ||
          "Failed to update user"
      );
    }
  };

  const deleteUser = async (userId: string) => {
    if (!userId) {
      throw new Error("Invalid user ID provided");
    }
    try {
      const response = await api.delete(`/admin/users/${userId}`);
      await queryClient.invalidateQueries({ queryKey: ["users"] });
      return response.data;
    } catch (error: any) {
      console.error("Error deleting user:", error);
      throw new Error(
        error?.response?.data?.error ||
          error?.message ||
          "Failed to delete user"
      );
    }
  };

  return {
    users: data?.users ?? [],
    loading: isLoading,
    error,
    totalRecords: data?.totalUsers ?? 0,
    currentPage,
    limit,
    setCurrentPage,
    setlimit,
    updateUser,
    deleteUser,
    createUser,
  };
};
