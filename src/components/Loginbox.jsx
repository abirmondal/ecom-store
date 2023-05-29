import React, { useEffect, useState, useContext } from "react";
import Alertmessage from "./Alertmessage";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Loginbox() {
  const navigate = useNavigate();
  const { login, token } = useContext(AuthContext);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const alertType = "danger";

  function takeInput(e) {
    if (e.target.id === "username") {
      setUsername(e.target.value);
      if (e.target.value === "") {
        document.querySelector("#username").classList.add("is-invalid");
        return;
      }
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
      if (e.target.value === "") {
        document.querySelector("#password").classList.add("is-invalid");
        return;
      }
    }
    e.target.classList.remove("is-invalid");
    setShowAlert(false);
  }

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const usernameInput = e.target[0].value;
      const passwordInput = e.target[1].value;
      if (usernameInput === "") {
        document.querySelector("#username").classList.add("is-invalid");
        return;
      }
      if (passwordInput === "") {
        document.querySelector("#password").classList.add("is-invalid");
        return;
      }

      document.querySelector("#loginBtn").textContent = "Logging in...";

      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameInput,
          password: passwordInput,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            return res.text().then((text) => {
              throw new Error(text);
            });
          }
          return res.json();
        })
        .then((data) => {
          login(data["token"]);
          navigate("/");
        })

        .catch((error) => {
          setAlertMessage(error.message);
          setShowAlert(true);
        });
      document.querySelector("#loginBtn").textContent = "Login";
    });
  }, [token, login, navigate]);
  return (
    <div className="row align-items-center" style={{ minHeight: "85vh" }}>
      <div className="col-lg-5 col-md-8 mx-auto">
        <div className="card card-body py-5 px-4">
          <form>
            <h1 className="text-center pb-4">Login</h1>
            {showAlert && <Alertmessage type={alertType} message={alertMessage} closeButton="false" />}
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="username" name="username" placeholder="Username" onChange={takeInput} value={username} />
              <label htmlFor="username">Username</label>
              <div className="invalid-feedback">Username field is required.</div>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={takeInput} value={password} />
              <label htmlFor="password">Password</label>
              <div className="invalid-feedback">Password field is required.</div>
            </div>
            <button type="submit" className="btn btn-success w-100" id="loginBtn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
