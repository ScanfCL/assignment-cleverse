import React from "react";
import styled from "styled-components";

import { Sidebar } from "./components/Sidebar";
import { ShopList } from "./components/ShopList";

const SearchResultPage = ({ className }) => {
  return (
    <div className={className}>
      <div className="title">ผลการค้นหาทั้งหมด</div>
      <div className="wrapper-content">
        <Sidebar />
        <ShopList />
      </div>
    </div>
  );
};

const StyledSearchResultPage = styled(SearchResultPage)`
  padding: 20px;

  > .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  > .wrapper-content {
    display: flex;

    > ${Sidebar} {
      flex: 1;
    }

    > ${ShopList} {
      flex: 3;
    }
  }
`;

export { StyledSearchResultPage as SearchResultPage };
