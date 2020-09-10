import React from "react";

const FormControl = ({ label, name, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor="" className="mt-2">
        {label}
      </label>
      <input
        type="text"
        className="form-control custom-form-control"
        name={name}
        {...props}
      />
    </div>
  );
};

export default FormControl;
