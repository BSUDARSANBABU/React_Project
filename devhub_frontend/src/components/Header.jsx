// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">DevHub</Link>
      </div>
      <nav className="main-nav">
        <ul>
          {/* Main Navigation Items */}

          {/* 1. Projects/Talent Management Dropdown (Inspired by HR/Performance/Payroll) */}
          <li className="dropdown">
            <Link to="/projects" className="nav-link">
              Talent Hub <span>&#9660;</span>
            </Link>
            <div className="dropdown-content mega-menu">
              {/* Column 1: Projects/Development */}
              <div className="dropdown-column">
                <h4>Project Management</h4>
                <Link to="/projects">Project Showcase</Link>
                <Link to="/management/asset">Asset Management</Link>
                <Link to="/management/document">Document Management</Link>
                <Link to="/management/timesheet">Timesheet Management</Link>
              </div>

              {/* Column 2: Developer Profiles/Talent */}
              <div className="dropdown-column">
                <h4>Developer Management</h4>
                <Link to="/developers">Developer Directory</Link>
                <Link to="/developers/performance">Performance Review (OKR/KPI)</Link>
                <Link to="/developers/compensation">Compensation & Incentives</Link>
              </div>

              {/* Column 3: Recruitment/Onboarding */}
              <div className="dropdown-column">
                <h4>Hiring & Onboarding</h4>
                <Link to="/recruitment/ats">Applicant Tracking System</Link>
                <Link to="/recruitment/candidates">Candidate Management</Link>
                <Link to="/onboarding">Employee Onboarding</Link>
              </div>
            </div>
          </li>

          {/* 2. Developers Page */}
          <li>
            <Link to="/developers" className="nav-link">Developers</Link>
          </li>
          
          {/* 3. Resources Dropdown */}
          <li className="dropdown">
            <Link to="/resources" className="nav-link">
              Resources <span>&#9660;</span>
            </Link>
            <div className="dropdown-content standard-menu">
              <Link to="/resources?category=BLOG">Blogs & Insights</Link>
              <Link to="/resources?category=GUIDE">Guides & Tutorials</Link>
              <Link to="/resources?category=TOOL">Calculators & Tools</Link>
              <Link to="/resources?category=GLOSSARY">Glossary</Link>
              <Link to="/resources/templates">Templates & Checklists</Link>
            </div>
          </li>

          {/* 4. Admin/Login & Demo Button */}
          <li>
            <Link to="/admin-login" className="login-btn">Admin Login</Link>
          </li>
          <li>
            <a href="#contact" className="book-demo-btn">Book a Demo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;