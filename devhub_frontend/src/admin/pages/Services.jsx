import { useEffect, useState } from "react";
import API from "../../services/api";
import ServiceForm from "../forms/ServiceForm";


export default function Services() {
const [services, setServices] = useState([]);
const [editData, setEditData] = useState(null);


const loadServices = async () => {
const res = await API.get("services/");
setServices(res.data);
};


useEffect(() => { loadServices(); }, []);


const deleteService = async (id) => {
await API.delete(`services/${id}/`);
loadServices();
};


return (
<div>
<h2>Services</h2>
<ServiceForm refresh={loadServices} editData={editData} />


{services.map(s => (
<div key={s.id}>
<b>{s.title}</b>
<button onClick={() => setEditData(s)}>Edit</button>
<button onClick={() => deleteService(s.id)}>Delete</button>
</div>
))}
</div>
);
}