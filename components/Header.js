import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { SearchInput } from "./SearchInput";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <div className="wrapper-content">
        <Image
          src="/images/halfhalf-logo.png"
          alt="half-logo"
          height="40"
          width="151"
        />
        <Image
          src="/images/raochana.png"
          alt="half-logo"
          height="40"
          width="114"
        />
        <Image
          src="/images/thongfah-logo.png"
          alt="half-logo"
          height="40"
          width="127"
        />
        <SearchInput placeholder="ค้นหาร้านค้าหรือบริการที่ร่วมโครงการ" />
      </div>
    </div>
  );
};

const StyledHeader = styled(Header)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  > .wrapper-content {
    display: flex;
    justify-content: center;
    max-width: 1280px;
    width: 100%;

    > ${SearchInput} {
      flex: 1;
    }
  }
`;

export { StyledHeader as Header };
