import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import medicineLogo from '../assets/medicine-logo1.png';

function Header() {

  return (
    <>
      <div className="header">
        <div className="header-centralize">
          <img src={medicineLogo} alt="Medicine logo"
          height="25px" width="25px" />
          <ul className="header-menu-links">
            {/* Navigation Links */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/medicine-list">Medicine List</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header
