import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface SidebarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const { startLogout } = useAuth();

  const handleLogout = () => {
    startLogout();
  };
  return (
    <>
      {/* Sidebar en móvil (overlay) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 font-bold text-xl border-b">Mi App</div>
        <nav className="p-4 space-y-2">
          <Link to="/dashboard" className="block p-2 rounded hover:bg-gray-200">
            Inicio
          </Link>
          <Link to="/about" className="block p-2 rounded hover:bg-gray-200">
            Acerca de
          </Link>
          <Link to="/settings" className="block p-2 rounded hover:bg-gray-200">
            Configuración
          </Link>
          <button onClick={handleLogout} className="w-full text-left block p-2 rounded hover:bg-gray-200">
            Cerrar Sesion
          </button>
        </nav>
      </aside>
    </>
  );
}
