import React from "react";
import styled from "styled-components";

import { Location } from "./Icons";

export const Select = styled(
  ({
    label,
    className,
    options = [],
    placeholder = "please-select",
    value = "",
    icon,
    onChange,
  }) => {
    const handleChange = (e) => {
      onChange(e.target.value);
    };
    return (
      <div className={className}>
        {label && <div className="label">{label}</div>}
        <select name="cars" id="cars" value={value} onChange={handleChange}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        {icon && icon}
      </div>
    );
  }
)`
  position: relative;
  min-height: 30px;

  > .label {
    font-size: 12px;
  }

  > .location {
    position: absolute;
    top: 4px;
    left: 10px;
  }

  > select {
    position: ${(props) => (props.icon ? "absolute" : "unset")};
    top: 0;
    left: 0;
    border: 1px solid #e2e8f0;
    height: 30px;
    padding: 0 10px 0 ${(props) => (props.icon ? "30px" : "10px")};
    width: 100%;
    font-family: "Kanit", sans-serif;
  }
`;
