import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="icon"
            href="https://gencmermer.com.tr/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="shortcut icon"
            href="https://gencmermer.com.tr/favicon.ico"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="https://gencmermer.com.tr/img/favicon.png"
            type="image/png"
          />
          <link
            rel="shortcut icon"
            href="https://gencmermer.com.tr/img/favicon.png"
            type="image/png"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Genç Mermer",
                url: "https://gencmermer.com.tr",
                logo: "https://gencmermer.com.tr/img/logo/logo-red.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+90-532-592-8100",
                  contactType: "Customer Service",
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Baksan Sanayi Sitesi, 81. Blok",
                  addressLocality: "Tepebaşı",
                  addressRegion: "Eskişehir",
                  postalCode: "26200",
                  addressCountry: "TR",
                },
              }),
            }}
          ></script>
          <link
            rel="apple-touch-icon"
            href="https://gencmermer.com.tr/img/logo/logo-red.png"
          />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
