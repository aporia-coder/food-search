import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo p-l-3">
        <li>
          <Link to="/" className="navbar-name">
            StayHealthy
          </Link>
        </li>
      </div>
      <FaAlignRight className="hamburger" onClick={(e) => setOpen(!open)} />
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="navbar-link">
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/calculator" className="navbar-link">
            Calorie Calculator
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
