import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">SoftwareCo</h1>

        <nav className=" nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/developers">Team</NavLink>
          <NavLink to="/technologies">Technologies</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
