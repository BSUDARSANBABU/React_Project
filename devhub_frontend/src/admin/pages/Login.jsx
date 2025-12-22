import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export default function Login() {
const { login } = useContext(AuthContext);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = async (e) => {
e.preventDefault();
try {
await login(username, password);
window.location.href = "/admin";
} catch {
alert("Invalid credentials");
}
};


return (
<div className="admin-login">
<h2>Admin Login</h2>
<form onSubmit={handleSubmit}>
<input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
<button type="submit">Login</button>
</form>
</div>
);
}