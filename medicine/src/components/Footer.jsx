import { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <>
      <div className="footer">
        <ul className="footer-menu-links">
          {/* Navigation Links */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/medicine-list">Medicine List</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Footer
