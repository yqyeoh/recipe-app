import React from 'react';

function Input({ name, label, type = 'text', handleChange, value, error }) {
  return (
    <div className="form-group">
      <label htmlFor={`${name}-input`}>{label}</label>
      {type === 'text' || type === 'password' ? (
        <input
          type={type}
          className="form-control"
          id={`${name}-input`}
          name={name}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <input
          type="number"
          min="1"
          step="1"
          className="form-control"
          id={`${name}-input`}
          name={name}
          onChange={handleChange}
          value={value}
        />
      )}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default Input;
