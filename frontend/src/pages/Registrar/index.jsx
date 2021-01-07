import React, { useContext } from "react";
import { RegisterContext, RegisterProvider } from "./common/context";

import DatosPrincipales from "./components/DatosPrincipales/";
import FichaMedica from "./components/FichaMedica";
import VerificarDatos from "./components/VerificarDatos";

const StepForm = () => {
  const { state } = useContext(RegisterContext);

  switch (state.step) {
    case 1:
      return <DatosPrincipales />;
    case 2:
      return <FichaMedica />;
    case 3:
      return <VerificarDatos />;
    default:
      return <p>There is a problem.</p>;
  }
};

const Index = () => {
  return (
    <RegisterProvider>
      <div className="row">
        <div className="col-md-12">
          <h4>Registrar alumno(a)</h4>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <StepForm />
        </div>
      </div>
    </RegisterProvider>
  );
};

export default Index;
