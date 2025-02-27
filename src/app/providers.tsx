"use client";

import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { getUserProfile } from "@/services/authService";
import { logout, setUser } from "@/store/slices/authSlice";

function AuthSetup() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Fetch user profile from backend
          const userProfile = await getUserProfile();
          dispatch(setUser(userProfile));
          router.push("/");
        } catch (error) {
          console.error("Token refresh failed:", error);
          dispatch(logout());
          router.push("/login");
        }
      } else {
        dispatch(logout());
        router.push("/login");
      }
    });
  }, []);

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthSetup />
        {children}
      </QueryClientProvider>
    </Provider>
  );
}
