import React from "react";
import myimg from "../images/my-image.png"

export default function About() {
  return (
    <div>
      <h1>About This Project</h1>
      <hr />
      <div className="row">
        <div className="col-md-5">
          <img className="mx-auto d-block" src={myimg} alt="Abir's Thumbnail" style={{ maxHeight: "60vh" }} />
          <h2 className="fs-4 text-center pt-2">Abir Mondal</h2>
        </div>
        <div className="col-md-7 align-self-center">
          <p>I have created this website as a part of my learning process of React. I have used the following</p>
          <ul>
            <li>
              <a href="https://fakestoreapi.com/" target="_blank" rel="noreferrer">
                Fake Store API
              </a>{" "}
              to fetch the products.
            </li>
            <li>
              <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
                React Router
              </a>{" "}
              to create the routes.
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                Bootstrap 5.3
              </a>{" "}
              for styling the website.
            </li>
          </ul>
          <h2 className="fs-4">Tech Stacks Used</h2>
          <div className="p-1 d-flex">
            <div className="d-flex flex-column p-1 px-3 text-center">
              <i className="fa-brands fa-react fa-2xl p-2 py-4"></i> React
            </div>
            <div className="d-flex flex-column p-1 px-3 text-center">
              <i className="fa-brands fa-bootstrap fa-2xl p-2 py-4"></i> Bootstrap
            </div>
            <div className="d-flex flex-column p-1 px-3 text-center">
              <i className="fa-brands fa-font-awesome fa-2xl p-2 py-4"></i> Font Awesome
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
