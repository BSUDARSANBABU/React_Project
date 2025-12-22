import { useEffect, useState } from "react";
import API from "../../services/api";
import TechnologyForm from "../forms/TechnologyForm";


export default function Technologies() {
const [techs, setTechs] = useState([]);


const load = async () => {
const res = await API.get("technologies/");
setTechs(res.data);
};


useEffect(() => { load(); }, []);


return (
<div>
<h2>Technologies</h2>
<TechnologyForm refresh={load} />
{techs.map(t => <div key={t.id}>{t.name} ({t.category})</div>)}
</div>
);
}