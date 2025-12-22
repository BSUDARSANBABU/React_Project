import { NavLink } from "react-router-dom";


export default function Sidebar() {
return (
<aside className="admin-sidebar">
<h2 className="admin-logo">ADMIN</h2>
<nav>
<NavLink to="/admin" end>Dashboard</NavLink>
<NavLink to="/admin/services">Services</NavLink>
<NavLink to="/admin/projects">Projects</NavLink>
<NavLink to="/admin/technologies">Technologies</NavLink>
<NavLink to="/admin/developers">Developers</NavLink>
<NavLink to="/admin/blogs">Blogs</NavLink>
</nav>
</aside>
);
}