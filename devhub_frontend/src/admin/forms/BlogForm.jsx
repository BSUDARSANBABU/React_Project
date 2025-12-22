import { useEffect, useState } from "react";
import API from "../../services/api";


export default function BlogForm({ refresh, editData }) {
const [title, setTitle] = useState("");
const [content, setContent] = useState("");


useEffect(() => {
if (editData) {
setTitle(editData.title);
setContent(editData.content);
}
}, [editData]);


const handleSubmit = async (e) => {
e.preventDefault();
const data = { title, content };


if (editData)
await API.put(`blogs/${editData.id}/`, data);
else
await API.post("blogs/", data);


refresh();
};


return (
<form onSubmit={handleSubmit}>
<h3>{editData ? "Edit" : "Add"} Blog</h3>
<input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
<textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
<button>Save</button>
</form>
);
}