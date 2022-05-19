/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { Layout } from "../components/templates";
import "../styles/globals.css";

const MyApp = function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
