import "@/styles/globals.css";

import { PrismicPreview } from "@prismicio/next";

import { repositoryName } from "@/prismicio";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* TODO: Remove the following element once you have read the documentation. */}
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
