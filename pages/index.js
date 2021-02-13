import React, { createContext, useContext, useState } from "react";
import Image from "next/image";
import { useLocalStore } from "mobx-react";

import { Header } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SearchResultPage } from "../containers/SearchResult";
import { createStore } from "../stores/shops";

const StoreContext = createContext(null);
const HomeContext = createContext(null);

function Home() {
  const store = useLocalStore(createStore);
  const [shopsState, setShopsState] = useState([]);

  return (
    <StoreContext.Provider value={store}>
      <HomeContext.Provider value={{ shopsState, setShopsState }}>
        <div>
          <Header />
          <Breadcrumbs />
          <SearchResultPage />
          <div className="wrapper-bg-image">
            <Image
              className="bg-image"
              layout="fill"
              src="/images/result-bg.png"
              alt="bg-image"
            />
          </div>
        </div>
      </HomeContext.Provider>
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
};

export const useHome = () => {
  return useContext(HomeContext);
};

export default Home;
