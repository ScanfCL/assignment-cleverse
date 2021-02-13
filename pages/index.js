import React, { createContext, useContext } from "react";
import Image from "next/image";
import { useLocalStore } from "mobx-react";

import { Header } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SearchResultPage } from "../containers/SearchResult";
import { createStore } from "../stores/shops";

const StoreContext = createContext(null);

function Home({ shops }) {
  const store = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>
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
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
};

export default Home;
