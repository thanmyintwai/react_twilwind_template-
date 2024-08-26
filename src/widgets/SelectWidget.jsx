import React from 'react';
import { Dropdown } from 'flowbite-react';

const SelectWidget = ({
  id,
  options,
  value,
  required,
  disabled,
  readonly,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
}) => {
  const { enumOptions } = options;

  const handleChange = (event) => {
    const newValue = multiple
      ? Array.from(event.target.options).filter(o => o.selected).map(o => o.value)
      : event.target.value;
    onChange(newValue);
  };

  return (
    <select
      id={id}
      multiple={multiple}
      className="form-select mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
      value={value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={handleChange}
      onBlur={onBlur && ((event) => onBlur(id, event.target.value))}
      onFocus={onFocus && ((event) => onFocus(id, event.target.value))}
    >
      {enumOptions.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SelectWidget;