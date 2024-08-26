import React from 'react';

const TextWidget = ({
  id,
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
  schema,
  uiSchema,
  rawErrors,
  formContext,
}) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <input
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
  );
};

export default TextWidget;