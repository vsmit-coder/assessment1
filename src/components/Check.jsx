import React, { useState } from "react";
import ChecklistContext from "./Context";

const ChecklistProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prevOptions) =>
      checked ? [...prevOptions, value] : prevOptions.filter((option) => option !== value)
    );
  };

  return (
    <ChecklistContext.Provider value={{ selectedOptions, handleCheckboxChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};

export default ChecklistProvider;
