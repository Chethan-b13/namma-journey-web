"use client";

import { useState } from "react";

interface UseFormStatus {
  loading: boolean;
  successMsg: string;
  errorMsg: string;
  setLoading: (v: boolean) => void;
  setSuccessMsg: (v: string) => void;
  setErrorMsg: (v: string) => void;
  resetStatus: () => void;
}

export function useFormStatus(): UseFormStatus {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function resetStatus() {
    setLoading(false);
    setSuccessMsg("");
    setErrorMsg("");
  }

  return {
    loading,
    successMsg,
    errorMsg,
    setLoading,
    setSuccessMsg,
    setErrorMsg,
    resetStatus,
  };
}
