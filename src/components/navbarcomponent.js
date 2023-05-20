import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Bureau_of_Jail_Management_and_Penology.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/sign-in">
          <img src={logo} alt="Logo" className="navbar-logo mr-3" style={{ width: '40px', height: '40px' }} />
          <span className="navbar-text" style={{ marginLeft: '10px' }}>BJMP Employee Scheduling</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
