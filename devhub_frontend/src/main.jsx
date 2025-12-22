import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./admin/admin.css";
import 'mdbootstrap/css/mdb.css';
import 'mdbootstrap/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
