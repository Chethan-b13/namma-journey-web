"use client";

import { useQuery } from "@tanstack/react-query";
import { AdminUsersResponse, User } from "@/types/User";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for redirection
import api from "@/config/axios";

const token = localStorage.getItem("authToken");

const fetchUsers = async (
  page: number,
  limit: number
): Promise<AdminUsersResponse> => {
  const response = await api.get(`/users/list?page=${page}&limit=${limit}`);
  return response.data;
};

export const useUsers = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setlimit] = useState(10);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      router.push("/login"); // Redirect to login if token is missing
    }
  }, [token]);

  const { data, isLoading, error } = useQuery<AdminUsersResponse, Error>({
    queryKey: ["users", currentPage, limit],
    queryFn: async () => {
      if (!token) throw new Error("User is not authenticated");
      return fetchUsers(currentPage, limit);
    },
    enabled: !!token, // Only fetch data if token exists
    placeholderData: {
      users: [],
      totalUsers: 0,
      currentPage: 1,
      totalPages: 10,
    },
  });

  return {
    users: data?.users ?? [],
    loading: isLoading,
    error,
    totalRecords: data?.totalUsers ?? 0,
    currentPage,
    limit,
    setCurrentPage,
    setlimit,
  };
};
