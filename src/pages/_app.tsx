import "./../styles/globals.scss";
import type { AppProps } from "next/app";

function SuperMarket({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default SuperMarket;
