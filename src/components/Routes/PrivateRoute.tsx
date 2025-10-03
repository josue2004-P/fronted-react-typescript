// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Loading from "./Loading";

interface Props {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {
  const { isLoggedIn, checking } = useAuth();

  if (checking) {
    return <Loading />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
