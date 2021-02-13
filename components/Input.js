import React from "react";
import styled from "styled-components";

export const Input = styled(
  ({ className, label, value, onChange = () => {}, ...props }) => {
    const handleChange = (e) => {
      onChange(e.target.value);
    };

    return (
      <div className={className}>
        {label && <div className="label">{label}</div>}
        <input
          value={value}
          className="input-field"
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
)`
  > .label {
    font-size: 12px;
  }

  > .input-field {
    height: 30px;
    border: 1px solid #e2e8f0;
    width: 100%;
  }
`;
