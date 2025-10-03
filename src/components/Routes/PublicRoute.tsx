import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Loading from "./Loading";

interface Props {
  children: JSX.Element;
}

export default function PublicRoute({ children }: Props) {
  const { isLoggedIn, checking } = useAuth();

  if (checking) {
    return <Loading />;
  }

  if (isLoggedIn) {
    // Si ya está logueado, redirigir al dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
