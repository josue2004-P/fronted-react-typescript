import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AuthLoader from "./components/Routes/AuthLoader";

import { HomePage, AboutPage } from "./pages/Home";
import { LoginPage, RegisterPage } from "./pages/Auth";
import { DashboardPage } from "./pages/Administrator";
import Layout from "./components/Layout";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      {/* Componente que ejecuta renew token al cargar la app */}
      <AuthLoader />

      <Routes>
        {/* Rutas privadas */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
        </Route>

        {/* Rutas públicas */}
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        {/* Página 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
