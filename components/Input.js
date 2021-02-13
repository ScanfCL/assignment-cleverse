import React from "react";
import styled from "styled-components";

export const Input = styled(({ className, ...props }) => {
  return <input className={className} {...props} />;
})`
  height: 30px;
  border: 1px solid #e2e8f0;
`;
