import React from "react";
import styled from "styled-components";

import { Location, SearchIcon } from "./Icons";
import { Select } from "./Select";

export const SearchInput = styled(({ className, placeholder }) => {
  return (
    <div className={className}>
      <Select
        className="select-field"
        placeholder="พื้นที่ใกล้ฉัน"
        icon={<Location className="location" />}
      />
      <input className="search-field" placeholder={placeholder} />
      <button className="button-search">
        <SearchIcon size={14} />
      </button>
    </div>
  );
})`
  display: flex;

  > .select-field {
    > svg {
      top: 10px;
    }

    > select {
      position: unset;
      height: 40px;
      border: 1px solid #e2e8f0;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      width: 192px;
    }
  }

  > .search-field {
    height: 40px;
    border: 1px solid #e2e8f0;
    border-left: 0;
    border-right: 0;
    width: 100%;
    padding: 0 10px;

    > ::placeholder {
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
