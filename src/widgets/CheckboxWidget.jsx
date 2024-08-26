import React from 'react';

const CheckboxWidget = ({
  id,
  value,
  required,
  disabled,
  readonly,
  autofocus,
  onChange,
  onBlur,
  onFocus,
}) => {
  const handleChange = (event) => onChange(event.target.checked);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className="form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        checked={typeof value === "undefined" ? false : value}
        required={required}
        disabled={disabled || readonly}
        autoFocus={autofocus}
        onChange={handleChange}
        onBlur={onBlur && ((event) => onBlur(id, event.target.checked))}
        onFocus={onFocus && ((event) => onFocus(id, event.target.checked))}
      />
      <label htmlFor={id} className="ml-2 block text-sm font-medium text-gray-700">
        {id}
      </label>
    </div>
  );
};

export default CheckboxWidget;