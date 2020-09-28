import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

const StudentContext = createContext(initialState);

const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
