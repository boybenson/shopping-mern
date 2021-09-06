import React from "react";
import { Form } from "react-bootstrap";

const TextField = ({
  handleBlur,
  type,
  placeholder,
  label,
  onChange,
  values,
  touched,
  errors,
  name,
  size,
  defaultValue,
}) => {
  return (
    <div>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type={type ?? "text"}
        placeholder={placeholder}
        size={size ?? "lg"}
        name={name}
        defaultValue={defaultValue}
        onBlur={handleBlur}
        onChange={onChange}
      />
      {touched[name] && errors[name] ? (
        <div className="text-danger">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default TextField;
