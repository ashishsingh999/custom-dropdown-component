import { useState } from "react";
import SelectComponent from "./SelectComponent";
import "./styles.css";

const options = [
  { key: 1, value: "Option 1" },
  { key: 2, value: "Option 2" },
  { key: 3, value: "Option 3" },
  { key: 4, value: "Option 4" },
];
export default function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <h1>Custom Select / Dropdown Component</h1>
      <SelectComponent
        options={options}
        onChange={(item) => setSelectedOption(item)}
        selectedKey={selectedOption}
        placeholder={"type to search"}
        open={open}
        setOpen={setOpen}
      />
      <p>selected option: {selectedOption}</p>
    </div>
  );
}
