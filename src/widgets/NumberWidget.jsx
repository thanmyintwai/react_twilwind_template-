import React from 'react';

const NumberWidget = ({
  id,
  title,
  placeholder,
  value,
  required,
  disabled,
  readonly,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  options,
}) => {
  const handleChange = (event) => {
    const valueAsNumber = event.target.value ? Number(event.target.value) : undefined;
    onChange(valueAsNumber);
  };

  const handleIncrement = () => {
    const newValue = (value || 0) + 1;
    onChange(newValue);
  };

  const handleDecrement = () => {
    const newValue = (value || 0) - 1;
    onChange(newValue);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor={id} className="text-gray-700 font-medium">
        {title} {/* Display the title here */}
      </label>
      <input
        type="number"
        id={id}
        className="form-input mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
        placeholder={placeholder}
        value={value || ''}
        required={required}
        disabled={disabled || readonly}
        autoFocus={autofocus}
        onChange={handleChange}
        onBlur={onBlur && ((event) => onBlur(id, event.target.value))}
        onFocus={onFocus && ((event) => onFocus(id, event.target.value))}
      />
      </div>
  );
};

export default NumberWidget;