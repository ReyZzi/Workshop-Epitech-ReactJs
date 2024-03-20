// Dropdown.tsx
import { useState } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="form-select block w-full mt-1"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
