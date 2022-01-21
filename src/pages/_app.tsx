import "../../styles/globals.scss";
import type { AppProps } from "next/app";
import { ConfigContextProvider } from "@contexts/ConfigContext";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ConfigContextProvider>
      <Component {...pageProps} />
    </ConfigContextProvider>
  );
}

export default MyApp;
