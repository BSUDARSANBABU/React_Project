import { useEffect, useState } from "react";
import API from "../../services/api";
import BlogForm from "../forms/BlogForm";


export default function Blogs() {
const [blogs, setBlogs] = useState([]);


const load = async () => {
const res = await API.get("blogs/");
setBlogs(res.data);
};


useEffect(() => { load(); }, []);


return (
<div>
<h2>Blogs</h2>
<BlogForm refresh={load} />
{blogs.map(b => <div key={b.id}>{b.title}</div>)}
</div>
);
}