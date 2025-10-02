// src/components/AuthLoader.tsx
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function AuthLoader() {
  const { startRenewToken } = useAuth();

  useEffect(() => {
    startRenewToken();
  }, [startRenewToken]); // ✅ solo se ejecuta una vez
  return null;
}
