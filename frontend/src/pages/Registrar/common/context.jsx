import React, { useReducer, createContext } from "react";
import reducer from "./reducer";

const initialState = {
  step: 1,
  photo: undefined,
  studentData: {
    noControl: "",
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    semestre: "",
    grupo: "",
    especialidad: "",
    generacion: "",
    curp: "",
    nss: "",
  },
  ficha_medica: {
    padecimientos: "Ninguna indicación.",
    notas_medicas: "Ninguna indicación.",
    alergias: "Ninguna indicación.",
    medicamentos: "Ninguna indicación.",
    grupo_sanguineo: "Sin asignar.",
    estatura: "Sin asignar.",
    peso: "Sin asignar.",
    contacto_emergencia: {
      parentesco: "Sin asignar.",
      nombre: "Sin asignar.",
      telefono: "Sin asignar.",
      etiqueta: "Sin asignar.",
    },
  },
};

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
