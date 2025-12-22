import { useEffect, useState } from "react";
import API from "../../services/api";


export default function TechnologyForm({ refresh, editData }) {
const [name, setName] = useState("");
const [category, setCategory] = useState("frontend");
const [logo, setLogo] = useState(null);


useEffect(() => {
if (editData) {
setName(editData.name);
setCategory(editData.category);
}
}, [editData]);


const handleSubmit = async (e) => {
e.preventDefault();
const fd = new FormData();
fd.append("name", name);
fd.append("category", category);
if (logo) fd.append("logo", logo);


if (editData)
await API.put(`technologies/${editData.id}/`, fd);
else
await API.post("technologies/", fd);


refresh();
};


return (
<form onSubmit={handleSubmit}>
<h3>{editData ? "Edit" : "Add"} Technology</h3>
<input value={name} onChange={e => setName(e.target.value)} placeholder="Technology Name" required />
<select value={category} onChange={e => setCategory(e.target.value)}>
<option value="frontend">Frontend</option>
<option value="backend">Backend</option>
<option value="database">Database</option>
<option value="tools">Tools</option>
</select>
<input type="file" onChange={e => setLogo(e.target.files[0])} />
<button>Save</button>
</form>
);
}