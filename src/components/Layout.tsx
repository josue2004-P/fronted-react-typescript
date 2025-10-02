import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Layout() {
  const { startLogout } = useAuth();

  const handleLogout = () => {
    startLogout();
  };

  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <h1>Mi App</h1>
        <Link to={"login"}>Login</Link>
        <button onClick={handleLogout}>Cerrar sesion</button>
      </header>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>

      <footer
        style={{ padding: "1rem", background: "#eee", marginTop: "1rem" }}
      >
        © 2025 Mi App
      </footer>
    </div>
  );
}
