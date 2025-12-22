import { useEffect, useState } from "react";
import API from "../../services/api";


export default function DeveloperForm({ refresh, editData }) {
const [name, setName] = useState("");
const [role, setRole] = useState("");
const [skills, setSkills] = useState("");
const [photo, setPhoto] = useState(null);


useEffect(() => {
if (editData) {
setName(editData.name);
setRole(editData.role);
setSkills(editData.skills);
}
}, [editData]);


const handleSubmit = async (e) => {
e.preventDefault();
const fd = new FormData();
fd.append("name", name);
fd.append("role", role);
fd.append("skills", skills);
if (photo) fd.append("photo", photo);


if (editData)
await API.put(`developers/${editData.id}/`, fd);
else
await API.post("developers/", fd);


refresh();
};


return (
<form onSubmit={handleSubmit}>
<h3>{editData ? "Edit" : "Add"} Developer</h3>
<input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
<input value={role} onChange={e => setRole(e.target.value)} placeholder="Role" />
<input value={skills} onChange={e => setSkills(e.target.value)} placeholder="Skills" />
<input type="file" onChange={e => setPhoto(e.target.files[0])} />
<button>Save</button>
</form>
);
}