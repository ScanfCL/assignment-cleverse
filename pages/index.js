import React from "react";
import Image from "next/image";

import { Header } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

import { SearchResultPage } from "../containers/SearchResult";

function Home() {
  return (
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
  );
}

export default Home;
