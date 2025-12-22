import React, { useEffect, useState } from "react";
import api from "../services/api";


export default function TechnologiesPage() {
const [techs, setTechs] = useState([]);


useEffect(() => {
api.get("technologies/").then(res => setTechs(res.data));
}, []);


return (
<div>
<h1>Technologies</h1>
{techs.map(t => <span key={t.id}>{t.name}</span>)}
</div>
);
}