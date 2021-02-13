import React from "react";
import styled from "styled-components";

const typeShop = {
  food: {
    avatar: "/images/icon-food.svg",
  },
  shop: {
    avatar: "/images/icon-etc.svg",
  },
  otop: {
    avatar: "/images/icon-otop.svg",
  },
};

export const ShopCard = styled(
  ({ className, imageUrl, name, category, location, joinedProject, type }) => {
    return (
      <div className={className}>
        <div className={`wrapper-image  ${type}`}>
          {imageUrl ? (
            <img
              className="avatar-shop-picture"
              src={imageUrl}
              alt="cover-shop"
            />
          ) : (
            <img
              className="avatar-shop"
              src={typeShop[type].avatar}
              alt="cover-shop"
            />
          )}
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="description">
            <span>
              {category} | {location}
            </span>
          </div>
          <div className="line" />
          <div className="description">โครงการที่เข้าร่วม :</div>
          <div>{joinedProject}</div>
        </div>
      </div>
    );
  }
)`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #e2e8f0;
  padding: 4px;
  background: white;

  > .wrapper-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 250px;
    min-height: 14rem;
    border-radius: 10px;

    &.food {
      background-color: rgba(253, 178, 111, 0.68);
    }

    &.shop {
      background-color: rgb(208, 179, 225);
    }

    &.otop {
      background-color: rgb(136, 221, 187);
    }

    > .avatar-shop {
      width: 100px;
    }

    > .avatar-shop-picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  > .info {
    padding: 12px 16px;
    flex: 1;

    > .name {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.65;
    }

    > .description {
      font-size: 14px;
      color: #999999;
    }

    > .line {
      width: 65%;
      height: 1px;
      background-color: rgb(238, 238, 238);
      margin: 18px 0px;
    }
  }
`;
