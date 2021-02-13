import React from "react";
import styled from "styled-components";

export const Radio = styled(({ className, name, value, label }) => {
  return (
    <div className={className}>
      <input type="radio" id={name} name={name} value={value} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
})`
  > label {
    font-size: 14px;
  }
`;
