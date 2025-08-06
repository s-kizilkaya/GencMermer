import React from "react";
import Head from "next/head";
import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";
import AIFloatingButton from "/components/AIFloatingButton.js";
import WhatsAppButton from "/components/WhatsAppButton.js";

function MyApp({ Component, pageProps }) {
  const phoneNumber = "905325928100";

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
      </Head>
      <Component {...pageProps} />
      <AIFloatingButton />
      <WhatsAppButton phoneNumber={phoneNumber} />
    </>
  );
}

export default MyApp;
