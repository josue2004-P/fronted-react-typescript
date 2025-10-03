import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Página no encontrada</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
