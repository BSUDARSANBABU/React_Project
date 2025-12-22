import { useEffect, useState } from "react";
import API from "../../services/api";
import DeveloperForm from "../forms/DeveloperForm";


export default function Developers() {
const [devs, setDevs] = useState([]);


const load = async () => {
const res = await API.get("developers/");
setDevs(res.data);
};


useEffect(() => { load(); }, []);


return (
<div>
<h2>Developers</h2>
<DeveloperForm refresh={load} />
{devs.map(d => <div key={d.id}>{d.name} - {d.role}</div>)}
</div>
);
}