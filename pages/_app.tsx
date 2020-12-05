/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { Layout } from "../components/templates";
import "../styles/globals.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
