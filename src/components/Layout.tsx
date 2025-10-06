import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar con estado */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100 md:ml-64 transition-all">
        {/* Header */}
        <header className="h-14 bg-white shadow flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold">Dashboard</h1>

          {/* Botón hamburguesa solo en móvil */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 bg-gray-800 text-white rounded-lg"
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </header>

        {/* Contenido dinámico */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="p-4 bg-gray-200 text-center text-sm text-gray-600">
          © 2025 Centro Medico
        </footer>
      </div>
    </div>
  );
}
