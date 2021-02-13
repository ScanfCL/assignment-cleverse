import React from "react";
import styled from "styled-components";

export const Breadcrumbs = styled(({ className }) => {
  return (
    <div className={className}>
      <div className="container">หน้าแรก / ค้นหา</div>
    </div>
  );
})`
  height: 46px;
  background-color: rgb(39, 57, 124);
  display: flex;

  > .container {
    max-width: 1280px;
    width: 100%;
    margin: auto;
    color: white;
    font-size: 14px;
  }
`;
