import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  children: JSX.Element;
}

export default function PublicRoute({ children }: Props) {
  const {isLoggedIn, checking} = useAuth()

  if (checking) {
    // Mientras se valida el token, muestra un loading
    return <div>Cargando...</div>;
  }


  if (isLoggedIn) {
    // Si ya está logueado, redirigir al dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
