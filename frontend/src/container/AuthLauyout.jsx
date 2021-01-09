import React from "react";
import jwt from "jsonwebtoken";
import api from "../services/auth";

import { UserProvider } from "../contexts/UserContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AuthLayout = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      jwt.verify(token, "WHAT_IS_THE_KEY");
      return (
        <UserProvider>
          <Navbar />
          <Sidebar />
          <div
            className="d-flex align-items-stretch"
            style={{ background: "#f2f6f9" }}
          >
            <div className="content p-4 py-5">{children}</div>
          </div>
        </UserProvider>
      );
    } catch (error) {
      api.logout();
      return <div></div>;
    }
  } else {
    window.location.href = "/login";
    return <></>;
  }
};

export default AuthLayout;
