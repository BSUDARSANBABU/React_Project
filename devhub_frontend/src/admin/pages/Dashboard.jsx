import Sidebar from "../components/Sidebar";
import AdminHeader from "../components/AdminHeader";


export default function Dashboard() {
return (
<div className="admin-layout">
<Sidebar />
<div className="admin-content">
<AdminHeader />
<h1>Dashboard</h1>
<p>Manage website content dynamically.</p>
</div>
</div>
);
}