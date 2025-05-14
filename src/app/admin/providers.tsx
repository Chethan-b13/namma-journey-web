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
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userProfile = await getUserProfile();
          dispatch(setUser(userProfile));
          router.push("/admin");
        } catch (error) {
          console.error("Auth error:", error);
          dispatch(logout());
          router.push("/admin/login");
        }
      } else {
        dispatch(logout());

        // Get the current path
        const pathname = window.location.pathname;

        // Only redirect to login if not on signup page
        if (pathname !== "/admin/signup") {
          router.push("/admin/login");
        }
      }
    });

    return () => unsubscribe();
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
