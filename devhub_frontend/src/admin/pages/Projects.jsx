import { useEffect, useState } from "react";
import API from "../../services/api";
import ProjectForm from "../forms/ProjectForm";


export default function Projects() {
const [projects, setProjects] = useState([]);


const loadProjects = async () => {
const res = await API.get("projects/");
setProjects(res.data);
};


useEffect(() => { loadProjects(); }, []);


const deleteProject = async (id) => {
await API.delete(`projects/${id}/`);
loadProjects();
};


return (
<div>
<h2>Projects</h2>
<ProjectForm refresh={loadProjects} />
{projects.map(p => (
<div key={p.id}>
<b>{p.name}</b>
<button onClick={() => deleteProject(p.id)}>Delete</button>
</div>
))}
</div>
);
}