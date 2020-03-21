import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo p-l-3">
        <li>
          <Link to="/" className="navbar-link">
            StayHealthy
          </Link>
        </li>
      </div>
      <FaAlignRight className="hamburger" />
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="navbar-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
