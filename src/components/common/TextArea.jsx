import React from 'react'

function TextArea({ name, label, handleChange, value, error}){
    return(
        <div className="form-group">
    <label htmlFor="instructions">{label}</label>
    <textarea className="form-control" id={name} name={name} onChange={handleChange} value={value} rows="3"></textarea>
  </div>
    )
}

export default TextArea
