import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

export function withSearchResultPage(Component) {
  function WithSearchResultPage(props) {
    // add some logic here
    // but dont have logic here haha :)
    // this path show example when we want to separate view and controller
    const pageProps = {};

    return <Component {...props} {...pageProps} />;
  }

  hoistNonReactStatics(WithSearchResultPage, Component);

  WithSearchResultPage.displayName = `withSearchResultPage(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WithSearchResultPage;
}
