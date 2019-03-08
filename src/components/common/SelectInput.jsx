import React from "react";

function SelectInput({ name, label, options, handleChange, value, error }) {
  return (
    <div className="form-group">
      <label htmlFor={`${name}-input`}>{label}</label>
      <select
        value={value}
        className="custom-select"
        id={`${name}-input`}
        name={name}
        onChange={handleChange}
      >
        <option key="default" value="">Choose One</option>
        {options.map(option => (
          <option value={option.name} key={`${option._id}`}>
            {option.name}
          </option>
        ))}
      </select>
      {error && 
    <div className="alert alert-danger" role="alert">
        {error}
    </div>
    }
    </div>
  );
}

export default SelectInput;
