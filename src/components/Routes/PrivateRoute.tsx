// src/components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  children: JSX.Element;
}
export default function PrivateRoute({ children }: Props) {

  const {isLoggedIn, checking} = useAuth()

  if (checking) {
    // Mientras se valida el token, muestra un loading
    return <div>Cargando...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
