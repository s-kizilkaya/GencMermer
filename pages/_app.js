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
        <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
        <title>Genç Mermer</title>
        <meta
          name="description"
          content="Genç Mermer Eskişehir'de kaliteli mermer çözümleri sunar. Zarif işçilik ve doğanın güzelliği ile estetik yaşam alanları."
        />
        <meta
          name="keywords"
          content="Genç Mermer, Genç Mermer Eskişehir, Eskişehir Genç Mermer, Mermer Eskişehir, Eskişehir Mermer, Mermer, Mermer Ustası, Mermerci, Mermer Firması, Doğal Taş, Granit, İç Mekan, Dış Mekan"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Genç Mermer | Anasayfa" />
        <meta
          property="og:description"
          content="Doğal taşlarla zarif yaşam alanları: Eskişehir Genç Mermer"
        />
        <meta
          property="og:image"
          content="https://www.gencmermer.com/img/MermerSiyah-bg.jpg"
        />
        <meta property="og:url" content="https://www.gencmermer.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
