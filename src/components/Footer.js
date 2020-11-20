import React from "react";

// Components
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container grid">
        <div className="flex">
          <h1 className="navbar-logo m-y-2">StayHealthy</h1>
          <p>Copyright &copy; 2020 Zachary Gray</p>
        </div>
        <div className="flex">
          <li>
            <Link to="/" className="footer-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="footer-links">
              Calorie Calculator
            </Link>
          </li>
          <li>
            <Link to="/products" className="footer-links">
              Recipes
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-links">
              Contact
            </Link>
          </li>
        </div>
        <div className="socials">
          <a href="#">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
