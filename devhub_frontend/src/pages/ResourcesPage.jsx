import React, { useEffect, useState } from "react";
import api from "../services/api";


export default function ResourcesPage() {
const [blogs, setBlogs] = useState([]);


useEffect(() => {
api.get("blogs/").then(res => setBlogs(res.data));
}, []);


return (
<div>
<h1>Resources</h1>
{blogs.map(b => (
<div key={b.id}>
<h3>{b.title}</h3>
<p>{b.summary}</p>
</div>
))}
</div>
);
}