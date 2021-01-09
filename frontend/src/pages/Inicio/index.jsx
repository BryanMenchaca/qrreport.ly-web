import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Inicio = () => {
  const { fullname } = useContext(UserContext);

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-12">
          <h4 className="text-dark">Hola, {fullname}!</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="box">Card 1</div>
        </div>
        <div className="col-md-3">
          <div className="box">Card 2</div>
        </div>
        <div className="col-md-3">
          <div className="box">Card 3</div>
        </div>
        <div className="col-md-3">
          <div className="box">Card 4</div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="box">Gráfica</div>
        </div>
        <div className="col-md-4">
          <div className="box">To Do List</div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="box">Tabla</div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
