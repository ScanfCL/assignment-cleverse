import React from "react";
import styled from "styled-components";

import { Location } from "./Icons";

export const Select = styled(
  ({ className, options = [], placeholder = "please-select", value = "" }) => {
    return (
      <div className={className}>
        <select name="cars" id="cars" value={value}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <Location className="location" />
      </div>
    );
  }
)`
  position: relative;
  height: 30px;

  > .location {
    position: absolute;
    top: 4px;
    left: 10px;
  }

  > select {
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #e2e8f0;
    height: 30px;
    padding: 0 10px 0 30px;
    width: 100%;
    z-index: -1;
  }
`;
