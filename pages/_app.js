import React from "react";
import Head from "next/head";
import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="c92VyyvpOUq1sExTa2TxvFrpfneI84x9SMXSz0hrcqw"
        />
        <link rel="icon" href="/img/favicon.png" />
        <title>Genç Mermer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
