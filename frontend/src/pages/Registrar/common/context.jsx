import React, { useReducer, createContext } from "react";
import { reducer, initialState } from "./reducer";

const RegisterContext = createContext(initialState);

const RegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <RegisterContext.Provider value={{ state, dispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};

export { RegisterContext, RegisterProvider };
