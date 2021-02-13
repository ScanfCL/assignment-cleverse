import React from "react";
import styled from "styled-components";

import { SearchIcon } from "./Icons";

export const SearchInput = styled(
  ({ className, placeholder, options = [], nameSelect }) => {
    return (
      <div className={className}>
        <select className="select-field" name={nameSelect} id={nameSelect}>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <input className="search-field" placeholder={placeholder} />
        <button className="button-search">
          <SearchIcon size={14} />
        </button>
      </div>
    );
  }
)`
  display: flex;

  > .select-field {
    height: 40px;
    border: 1px solid #e2e8f0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 192px;
  }

  > .search-field {
    height: 40px;
    border: 1px solid #e2e8f0;
    border-left: 0;
    border-right: 0;
    width: 100%;
    padding: 0 10px;

    ::placeholder {
      color: #999999;
    }
  }

  > .button-search {
    height: 40px;
    background: white;
    border: 1px solid #e2e8f0;
    outline: unset;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 62px;
  }
`;
