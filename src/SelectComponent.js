import React, { useEffect, useState } from "react";

const SelectComponent = ({
  options,
  placeholder = "",
  onChange,
  selectedKey,
  open,
  setOpen,
}) => {
  const [inputValue, setInputValue] = useState(placeholder);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onInputClick = () => {
    setOpen((prevValue) => !prevValue);
  };

  const onOptionSelected = (option) => {
    onChange !== undefined && onChange(option.key);
    onChange !== undefined && setInputValue(option.value);
    setOpen(false);
  };

  const clearDropdown = () => {
    setInputValue("");
    onChange("");
  };

  return (
    <div className="dropdown-container">
      <div className="input-container" onClick={onInputClick}>
        <input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={onInputChange}
        />
        <div className="input-arrow-container">
          <i className="input-arrow" />
        </div>

        {selectedKey || inputValue ? (
          <div className="input-clean-container" onClick={clearDropdown}>
            x
          </div>
        ) : null}
      </div>
      <div className={`dropdown ${open ? "visible" : ""}`}>
        {options.map((opt) => {
          return (
            <div
              key={opt.key}
              onClick={() => onOptionSelected(opt)}
              className="option"
            >
              {opt.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SelectComponent;
