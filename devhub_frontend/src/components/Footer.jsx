// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        
        {/* HR/PAYROLL/PERFORMANCE/RECRUITMENT Section */}
        <div className="footer-column-group">
            <div className="footer-column">
                <h4>HR</h4>
                <Link to="/employee-management">Employee Management</Link>
                <Link to="/time-attendance">Time & Attendance</Link>
                <Link to="/onboarding">Employee Onboarding</Link>
                <Link to="/expense-management">Expense Management</Link>
            </div>
            
            <div className="footer-column">
                <h4>PAYROLL</h4>
                <Link to="/payroll-automation">Payroll Automation</Link>
                <Link to="/statutory-compliance">Statutory Compliance</Link>
                <h4>RECRUIT</h4>
                <Link to="/applicant-tracking">Applicant Tracking System</Link>
                <Link to="/candidate-management">Candidate Management</Link>
            </div>

            <div className="footer-column">
                <h4>PERFORMANCE</h4>
                <Link to="/review-kpi">Review (KRA/KPI)</Link>
                <Link to="/objective-okr">Objective (OKR)</Link>
                <h4>INDUSTRY</h4>
                <Link to="/industry/it-saas">IT & SaaS</Link>
                <Link to="/industry/automotive">Automotive</Link>
            </div>
        </div>

        {/* Resources/About/Contact Section */}
        <div className="footer-column-group">
            <div className="footer-column">
                <h4>RESOURCES</h4>
                <Link to="/resources?category=BLOG">Blogs</Link>
                <Link to="/resources?category=GUIDE">Guides</Link>
                <Link to="/resources?category=TOOL">Calculators</Link>
                <Link to="/resources?category=GLOSSARY">Glossary</Link>
                <Link to="/resources">Reports</Link>
            </div>

            <div className="footer-column contact-column">
                <h4>DEVHUB</h4>
                <p>Easy-to-Use HR Software to hire, engage and pay teams globally.</p>
                <p>Email: contact@devhub.com</p>
                <p>© {new Date().getFullYear()} DevHub. All rights reserved.</p>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;