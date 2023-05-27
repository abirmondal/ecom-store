import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" title="Home">
          <i className="fa-solid fa-store fa-xl pe-2"></i>
          Ecom Store
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/electronics" title="Electronics">
                Electronics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jewelery" title="Jewelery">
                Jewelery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clothing/men">
                Men's Clothing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clothing/women">
                Women's Clothing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" title="Jewelery">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
