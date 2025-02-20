import React, { useContext } from "react";
import ChecklistContext from "./Context";

const Checklist = () => {
  const { selectedOptions, handleCheckboxChange } = useContext(ChecklistContext);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <div>
      <h2>Checklist</h2>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleCheckboxChange}
          />
          {option}
        </label>
      ))}
      <div>
        <h3>Selected Options:</h3>
        {selectedOptions.length > 0 ? (
          <ul>
            {selectedOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        ) : (
          <p>No options selected</p>
        )}
      </div>
    </div>
  );
};

export default Checklist;
