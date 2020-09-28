import React, { useState, useEffect, useCallback } from "react";
import { SearchOutlined } from "@material-ui/icons";
import api from "../../services/students";
import "./styles.css";

import BusquedaSkeleton from "./LoadingSkeleton/";
import StudentsTable from "./components/StudentsTable";

const Busqueda = () => {
  const [loading, setLoading] = useState(true);
  const [studentsArray, setStudentsArray] = useState([]);
  const [error, setError] = useState(false);

  const fetchAPI = useCallback(() => {
    setLoading(true);
    api
      .getRandomStudents()
      .then((res) => {
        setError(false);
        setLoading(false);
        setStudentsArray(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => fetchAPI(), [fetchAPI]);

  const onChange = (e) => {
    const { value } = e.target;
    api
      .search(value)
      .then((res) => {
        if (res.empty) {
          setError(res.empty);
        } else {
          setStudentsArray(res);
        }
      })
      .catch((err) => fetchAPI());
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <h4>Búsqueda</h4>
        </div>
        <div className="col-md-4">
          <div className="input-group flex-nowrap">
            <div className="input-group-prepend">
              <span className="input-group-text" id="addon-wrapping">
                <SearchOutlined />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar"
              onChange={onChange}
              aria-describedby="addon-wrapping"
              disabled={loading ? true : false}
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          {loading ? (
            <BusquedaSkeleton />
          ) : (
            <div className="table-responsive-xl">
              {error ? fetchAPI() : <StudentsTable students={studentsArray} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Busqueda;
