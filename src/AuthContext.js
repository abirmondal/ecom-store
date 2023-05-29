import React, { useState } from "react";

const AuthContext = React.createContext();

export default AuthContext;

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function login(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  function isAuthenticated() {
    return !!token;
  }

  return <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>;
}
