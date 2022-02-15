import React from "react";
import "./styles.css";

export const InputField = ({ label, name, type, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor="" className="mt-2">
        {label}
      </label>
      <input
        type={type}
        className="form-control custom-form-control"
        name={name}
        {...props}
      />
    </div>
  );
};

export const SelectField = ({ label, name, options, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor="" className="mt-2">
        {label}
      </label>
      <select
        className="custom-select custom-form-control"
        name="especialidad"
        {...props}
      >
        <option>--Selecciona una opción--</option>
        {options.map((value, key) => {
          return (
            <option value={value} key={key}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export const TextArea = ({ label, name, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <textarea
        name={name}
        className="form-control custom-form-control"
        cols="30"
        rows="2"
        {...props}
      />
    </div>
  );
};

export const InputFile = ({ label, name, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor="formFile" className="form-label mt-2">
        Default file input example
      </label>
      <input
        className="form-control custom-form-control"
        type="file"
        id="formFile"
        {...props}
      />
    </div>
  );
};
