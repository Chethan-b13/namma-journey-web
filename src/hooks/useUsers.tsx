'use client';

import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/User';
import { useState } from 'react';
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for redirection

interface UsersResponse {
  users: User[];
  total: number;
}

const token = localStorage.getItem("authToken");

if (!token) {
  throw new Error("User is not authenticated");
}


// const fetchUsers = async (page: number, pageSize: number): Promise<UsersResponse> => {
//   const response = await fetch(`/api/users?page=${page}&pageSize=${pageSize}`);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };
const fetchUsers = async (page: number, pageSize: number): Promise<UsersResponse> => {
  const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage

  const response = await fetch(`http://localhost:5000/api/users/list?page=${page}&pageSize=${pageSize}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Attach token to request
    },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return response.json();
};



export const useUsers = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      router.push("/login"); // Redirect to login if token is missing
    }
  }, [token]);

  const { data, isLoading, error } = useQuery<UsersResponse, Error>({
    queryKey: ["users", currentPage, pageSize],
    queryFn: async () => {
      if (!token) throw new Error("User is not authenticated");
      return fetchUsers(currentPage, pageSize);
    },
    enabled: !!token, // Only fetch data if token exists
    placeholderData: { users: [], total: 0 },
  });

  return {
    users: data?.users ?? [],
    loading: isLoading,
    error,
    totalRecords: data?.total ?? 0,
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
  };
};