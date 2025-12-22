import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h3>SoftwareCo</h3>

        <nav className="footer-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/developers">Team</NavLink>
          <NavLink to="/technologies">Technologies</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <p>© {new Date().getFullYear()} SoftwareCo. All rights reserved.</p>
      </div>
    </footer>
  );
}
