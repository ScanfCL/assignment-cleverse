import React from "react";
import Image from "next/image";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { observer } from "mobx-react";
import { useRouter } from "next/router";

import { SearchInput } from "./SearchInput";
import { useHome } from "../pages";

const Header = observer(({ className }) => {
  const router = useRouter();

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
        <SearchInput
          value={router.query.search}
          placeholder="ค้นหาร้านค้าหรือบริการที่ร่วมโครงการ"
          onChange={debounce((value) => {
            router.push({ query: { search: value } });
          }, 500)}
        />
      </div>
    </div>
  );
});

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
