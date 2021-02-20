import lazySizes from "lazysizes";

import "src/styles/globals.css";

lazySizes.cfg.preloadClass = "custom-lazypreload";
lazySizes.cfg.lazyClass = "custom-lazyload";
lazySizes.cfg.loadingClass = "custom-lazyloading";
lazySizes.cfg.loadedClass = "custom-lazyloaded";
lazySizes.cfg.srcAttr = "data-src";
lazySizes.cfg.minSize = 50;
lazySizes.cfg.loadMode = 1;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
