import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

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
