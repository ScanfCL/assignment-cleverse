import React from "react";
import styled from "styled-components";

export const ShopCard = styled(
  ({ className, imageUrl, name, category, location, joinedProject }) => {
    return (
      <div className={className}>
        <div className="wrapper-image">
          <img />
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
    background-color: rgba(253, 178, 111, 0.68);
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 100%;
    min-height: 14rem;
    border-radius: 10px;
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
