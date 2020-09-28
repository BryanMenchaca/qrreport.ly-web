import React from "react";

const Login = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    window.location.href = "/dashboard";
  } else {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 col-md-3"></div>
          <div className="col-lg-4 col-md-6">{children}</div>
          <div className="col-lg-4 col-md-3"></div>
        </div>
      </div>
    );
  }
};

export default Login;
