import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function AdminHeader() {
const { logout } = useContext(AuthContext);


return (
<header className="admin-header">
<span>Admin Panel</span>
<button onClick={logout}>Logout</button>
</header>
);
}