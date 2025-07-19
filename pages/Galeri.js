import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Head from "next/head";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPage.js";

// Sections for this page
import GaleriSection from "/pages-sections/GaleriPage-Sections/GaleriSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function GaleriPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Genç Mermer | Galeri</title>
        <meta
          name="description"
          content="Genç Mermer'in tamamladığı projelerden ilham alın. Mutfak tezgahı, kabir, denizlik ve daha fazlası için galerimizi inceleyin."
        />
        <meta
          name="keywords"
          content="Genç Mermer Galeri, Genç Mermer, Galeri, Mermer Uygulama Örnekleri, Eskişehir Mermer Galeri, Mutfak Tezgahı Galeri, Kabir Galeri, Denizlik Modelleri, Mermer Projeleri"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Genç Mermer | Galeri" />
        <meta
          property="og:description"
          content="Gerçek projelerimizden ilham alın. Eskişehir'de hayata geçen mermer uygulamalarımızı keşfedin."
        />
        <meta
          property="og:image"
          content="https://www.gencmermer.com.tr/img/mermer-parallax.jpg"
        />
        <meta
          property="og:url"
          content="https://www.gencmermer.com.tr/galeri"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Genç Mermer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/mermer-parallax.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} style={{ color: "#8b0020" }}>
                Galeri
              </h1>
              <h4>
                Projelerimizden ve ürünlerimizden derlediğimiz görselleri burada bulabilirsiniz. Mermerin estetiğini ve kalitesini yakından inceleyin.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GaleriSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
