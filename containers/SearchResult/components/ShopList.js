import React, { useEffect } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import { useRouter } from "next/router";

import { ShopCard } from "./ShopCard";
import { useHome, useStore } from "../../../pages";

const ShopList = observer(({ className }) => {
  const { shops, searchShops } = useStore();
  const { shopsState, setShopsState } = useHome();
  const router = useRouter();

  useEffect(() => {
    setShopsState(searchShops(router.query.search));
    if (router.query.search === "") {
      router.push({ query: {} });
    }
  }, [router.query.search]);

  const shopsRender =
    router.query.search || router.query.type ? shopsState : shops;

  return (
    <div className={className}>
      {shopsRender.map((shop, index) => (
        <ShopCard {...shop} index={index} />
      ))}
    </div>
  );
});

const StyledShopList = styled(ShopList)``;

export { StyledShopList as ShopList };
