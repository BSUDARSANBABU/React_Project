import React, { useEffect, useState } from "react";
import api from "../services/api";


export default function DevelopersPage() {
const [developers, setDevelopers] = useState([]);


useEffect(() => {
api.get("developers/").then(res => setDevelopers(res.data));
}, []);


return (
<div>
<h1>Our Team</h1>
{developers.map(d => (
<div key={d.id}>
<h3>{d.name}</h3>
<p>{d.role}</p>
</div>
))}
</div>
);
}