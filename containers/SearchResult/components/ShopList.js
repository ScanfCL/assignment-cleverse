import React from "react";
import styled from "styled-components";

import { ShopCard } from "./ShopCard";
import { useStore } from "../../../pages";

const ShopList = ({ className }) => {
  const { shops } = useStore();

  return (
    <div className={className}>
      {shops.map((shop) => (
        <ShopCard {...shop} />
      ))}
    </div>
  );
};

const StyledShopList = styled(ShopList)``;

export { StyledShopList as ShopList };
