import React, { createContext } from "react";
import jwt from "jsonwebtoken";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const decode = jwt.decode(localStorage.getItem("token"), "WHAT_IS_THE_KEY");
  return (
    <UserContext.Provider
      value={{ fullname: decode.fullname, email: decode.email }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
