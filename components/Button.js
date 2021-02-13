import React from "react";
import styled from "styled-components";

export const OutlineButton = styled(({ className, text }) => {
  return <button className={className}>{text}</button>;
})`
  color: #1890ff;
  border: 1px solid #1890ff;
  background: white;
  height: 30px;
  width: 100%;
`;
