import { useEffect, useState } from "react";
import API from "../../services/api";


export default function ServiceForm({ refresh, editData }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [icon, setIcon] = useState(null);


useEffect(() => {
if (editData) {
setTitle(editData.title);
setDescription(editData.description);
}
}, [editData]);


const handleSubmit = async (e) => {
e.preventDefault();
const formData = new FormData();
formData.append("title", title);
formData.append("description", description);
if (icon) formData.append("icon", icon);


if (editData)
await API.put(`services/${editData.id}/`, formData);
else
await API.post("services/", formData);


refresh();
setTitle(""); setDescription(""); setIcon(null);
};


return (
<form onSubmit={handleSubmit}>
<h3>{editData ? "Edit" : "Add"} Service</h3>
<input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
<textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
<input type="file" onChange={e => setIcon(e.target.files[0])} />
<button type="submit">Save</button>
</form>
);
}