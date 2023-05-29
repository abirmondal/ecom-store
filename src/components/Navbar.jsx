import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="android-chrome-192x192.png" alt="Ecom Store Logo" style={{ width: "35px" }} />
          &nbsp;&nbsp; Ecom Store
        </Link>
        <button className="btn theme-toggler" type="button" title="Theme Change">
          <i className="fa-solid fa-sun fa-lg" id="theme-icon"></i>
        </button>
        <button className="btn shopping-cart" type="button" title="Theme Change">
          <i className="fa-solid fa-cart-shopping fa-lg" id="cart"></i>
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/electronics">
                Electronics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/jewelery">
                Jewelery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clothing/men">
                Men's
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clothing/women">
                Women's
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {token ? (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              ) : (
                <Link className="btn" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
