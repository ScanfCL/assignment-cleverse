import React from "react";
import styled from "styled-components";

export const Checkbox = styled(
  ({ className, name, value, label, onChange, checked }) => {
    return (
      <div className={className}>
        <input
          type="checkbox"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
)`
  > label {
    font-size: 14px;
    font-weight: 300;
  }
`;
