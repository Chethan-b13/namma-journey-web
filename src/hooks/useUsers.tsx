"use client";

import { useQuery } from "@tanstack/react-query";
import { AdminUsersResponse } from "@/types/UserTypes";
import { useState } from "react";
import api from "@/config/axios";

export const useUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setlimit] = useState(10);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const { data, isLoading, error } = useQuery<AdminUsersResponse, Error>({
    queryKey: ["users", currentPage, limit, filters],
    queryFn: async () => {
      const response = await api.get(
        `/users/list?page=${currentPage}&limit=${limit}`
      );
      return response.data;
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
