import React from "react";
import { Link } from "react-router-dom";

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
              <Link className="nav-link" to="/electronics" title="Electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jewelery" title="Jewelery">
                Jewelery
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Clothing
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/clothing/men">
                    Men
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/clothing/women">
                    Women
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" title="Jewelery">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
