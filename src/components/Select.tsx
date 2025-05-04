import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null);

const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log("selectedOption", selectedOption);
  return (
    <SelectContext value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </SelectContext>
  );
};

const SelectOption = ({ value, children }) => {
  const { selectedOption } = useSelectContext();
  const isSelected = selectedOption === value;

  return (
    <option
      className={`${isSelected ? "bg-purple-500" : "bg-white"}`}
      value={value}
    >
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;

export default Select;

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }
  return context;
};
