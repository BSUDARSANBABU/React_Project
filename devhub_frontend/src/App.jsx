import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ================= PUBLIC PAGES ================= */
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import DevelopersPage from "./pages/DevelopersPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";

/* ================= ADMIN PAGES ================= */
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Services from "./admin/pages/Services";
import Projects from "./admin/pages/Projects";
import Technologies from "./admin/pages/Technologies";
import Developers from "./admin/pages/Developers";
import Blogs from "./admin/pages/Blogs";

/* ================= ADMIN COMPONENTS ================= */
import Sidebar from "./admin/components/Sidebar";
import AdminHeader from "./admin/components/AdminHeader";
import ProtectedRoute from "./admin/components/ProtectedRoute";

/* ================= LAYOUTS ================= */
import PublicLayout from "./layouts/PublicLayout";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <ProtectedRoute>
      <div className="admin-layout">
        <Sidebar />
        <div className="admin-main">
          <AdminHeader />
          <Outlet />
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="developers" element={<DevelopersPage />} />
          <Route path="technologies" element={<TechnologiesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin/login" element={<Login />} />

        {/* ================= ADMIN DASHBOARD ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="developers" element={<Developers />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>

      </Routes>
    </Router>
  );
}
