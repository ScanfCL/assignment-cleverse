import React from "react";
import styled from "styled-components";

export const OutlineButton = styled(({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
})`
  color: #1890ff;
  border: 1px solid #1890ff;
  background: white;
  height: 30px;
  width: 100%;
`;
