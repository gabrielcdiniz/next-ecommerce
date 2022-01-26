import "./../styles/globals.scss";
import { ConfigContextProvider } from "@/contexts/ConfigContext";
import type { AppProps } from "next/app";

function SuperMarket({ Component, pageProps }: AppProps) {
  return (
    <ConfigContextProvider>
      <Component {...pageProps} />
    </ConfigContextProvider>
  );
}

export default SuperMarket;
