import React from "react";
import styled from "styled-components";

export const Checkbox = styled(({ className, name, value, label }) => {
  return (
    <div className={className}>
      <input type="checkbox" id={name} name={name} value={value} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
})`
  > label {
    font-size: 14px;
  }
`;
