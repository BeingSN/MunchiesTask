import React from "react";
import { Form } from "react-bootstrap";

const RadioButton = ({ value, name, label, onChange, checked }) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            checked={checked}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default RadioButton;
