import React from "react";
import "./styles.css";

export const InputText = ({ handleInputChange }) => {
  return (
    <div>
      <input className="input-text" type="text" onChange={handleInputChange} />
    </div>
  );
};
