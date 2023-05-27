import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  // const setTheme = () => {
  //   const htmlElement = document.querySelector("html");
  //   const theme = htmlElement.getAttribute("data-bs-theme");
  //   htmlElement.setAttribute("data-bs-theme", theme === "dark" ? "light" : "dark");
  //   document.querySelector("#theme-icon").classList.toggle("fa-moon");
  // };
  

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="android-chrome-192x192.png" alt="Ecom Store Logo" style={{ width: "35px" }} />
          &nbsp;&nbsp; Ecom Store
        </Link>
        <button className="btn theme-toggler" type="button" title="Theme Change">
          <i className="fa-solid fa-sun fa-lg" id="theme-icon"></i>
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
                Men's Clothing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/clothing/women">
                Women's Clothing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
