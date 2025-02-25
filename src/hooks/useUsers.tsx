"use client";

import { useQuery } from "@tanstack/react-query";
import { AdminUsersResponse, User } from "@/types/User";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for redirection
import api from "@/config/axios";

// export const useUsers = () => {
//   const router = useRouter();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [limit, setlimit] = useState(10);
//   const [filters, setFilters] = useState<Record<string, string>>({});

//   const { data, isLoading, isFetching, error } = useQuery<
//     AdminUsersResponse,
//     Error
//   >({
//     queryKey: ["users", currentPage, limit, filters],
//     queryFn: async () => {
//       const queryParams = new URLSearchParams({
//         page: currentPage.toString(),
//         limit: limit.toString(),
//         ...filters,
//       });

//       const response = await api.get(`/users/list?${queryParams.toString()}`);
//       return response.data;
//     },
//     refetchOnWindowFocus: false,
//     placeholderData: {
//       users: [],
//       totalUsers: 0,
//       currentPage: 1,
//       totalPages: 10,
//     },
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (!token) {
//       router.push("/login");
//     }
//   }, [router]);

//   const applyFilters = (newFilters: Record<string, string>) => {
//     setFilters(newFilters);
//     setCurrentPage(1);
//   };

//   return {
//     users: data?.users ?? [],
//     loading: isLoading || isFetching,
//     error,
//     totalRecords: data?.totalUsers ?? 0,
//     currentPage,
//     limit,
//     setCurrentPage,
//     setlimit,
//   };
// };

export const useUsers = () => {
  const router = useRouter();
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

  const applyFilters = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
    setCurrentPage(1);
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
    applyFilters,
  };
};
