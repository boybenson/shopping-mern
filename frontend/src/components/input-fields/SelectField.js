import React from "react";
import { Form } from "react-bootstrap";

const SelectField = ({ name, label, options, onChange, touched, errors }) => {
  return (
    <div>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Select name={name} onChange={onChange}>
        {options?.map((option, index) => {
          return (
            <option value={option?.value} key={index}>
              {option?.label}
            </option>
          );
        })}
      </Form.Select>
      {touched[name] && errors[name] ? (
        <div className="text-danger">{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default SelectField;
