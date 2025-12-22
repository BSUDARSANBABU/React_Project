import { useEffect, useState } from "react";
import API from "../../services/api";
import { uploadImage } from "../../utils/imageUpload";

export default function ProjectForm({ refresh, editData }) {
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [techStack, setTechStack] = useState("");
const [image, setImage] = useState(null);


useEffect(() => {
if (editData) {
setName(editData.name);
setDescription(editData.description);
setTechStack(editData.tech_stack);
}
}, [editData]);

const handleImageUpload = async e => {
    const file = e.target.files[0];
    const res = await uploadImage(file, "projects/upload-image/");
    setFormData({ ...formData, image: res.image });
  };
  
const handleSubmit = async (e) => {
e.preventDefault();
const fd = new FormData();
fd.append("name", name);
fd.append("description", description);
fd.append("tech_stack", techStack);
if (image) fd.append("image", image);


if (editData)
await API.put(`projects/${editData.id}/`, fd);
else
await API.post("projects/", fd);


refresh();
};


return (
<form onSubmit={handleSubmit}>
<h3>{editData ? "Edit" : "Add"} Project</h3>
<input value={name} onChange={e => setName(e.target.value)} placeholder="Project Name" required />
<textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
<input value={techStack} onChange={e => setTechStack(e.target.value)} placeholder="Tech Stack" />
<input type="file" onChange={e => setImage(e.target.files[0])} />
<button>Save</button>
</form>
);
}