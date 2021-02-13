import React from "react";
import styled from "styled-components";

import { ShopCard } from "./ShopCard";

const mockData = [
  {
    imageUrl: "https://search-merchant.คนละครึ่ง.com/images/icon-food.svg",
    name: "ผลไม้ลุงกับป้า",
    category: "ร้านขายผลไม้ / ร้านขายผัก",
    location: "บางบัวทอง",
  },
  {
    imageUrl: "https://search-merchant.คนละครึ่ง.com/images/icon-food.svg",
    name: "ผลไม้ลุงกับป้า",
    category: "ร้านขายผลไม้ / ร้านขายผัก",
    location: "บางบัวทอง",
  },
  {
    imageUrl: "https://search-merchant.คนละครึ่ง.com/images/icon-food.svg",
    name: "ผลไม้ลุงกับป้า",
    category: "ร้านขายผลไม้ / ร้านขายผัก",
    location: "บางบัวทอง",
  },
  {
    imageUrl: "https://search-merchant.คนละครึ่ง.com/images/icon-food.svg",
    name: "ผลไม้ลุงกับป้า",
    category: "ร้านขายผลไม้ / ร้านขายผัก",
    location: "บางบัวทอง",
  },
];

const ShopList = ({ className }) => {
  return (
    <div className={className}>
      {mockData.map((shop) => (
        <ShopCard {...shop} />
      ))}
    </div>
  );
};

const StyledShopList = styled(ShopList)``;

export { StyledShopList as ShopList };
