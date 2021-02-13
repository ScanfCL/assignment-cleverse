import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import { observer } from "mobx-react";

import { useStore } from "../../pages";

export function withSearchResultPage(Component) {
  function WithSearchResultPage(props) {
    const pageProps = {};

    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithSearchResultPage, Component);

  WithSearchResultPage.displayName = `withSearchResultPage(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WithSearchResultPage;
}

// export async function getStaticProps() {
//   return { shops: shops.shops };
// }
