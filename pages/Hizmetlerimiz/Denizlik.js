import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Button from "/components/CustomButtons/Button.js";
import Link from "next/link";
import Head from "next/head";
import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPage.js";

// Sections for this page
import DenizlikSection from "/pages-sections/UrunlerPage-Sections/DenizlikSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function DenizlikPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Genç Mermer | Denizlik</title>
        <meta
          name="description"
          content="Genç Mermer ile estetik ve dayanıklı mermer denizlik çözümleri. İç ve dış cephelerde modern tasarımlarla uzun ömürlü uygulamalar."
        />
        <meta
          name="keywords"
          content="Genç Mermer Denizlik, Genç Mermer, Denizlik, Denizlik Modelleri, Dış Cephe Denizlik, Eskişehir Mermer Denizlik, İç Mekan Mermer"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Genç Mermer | Denizlik" />
        <meta
          property="og:description"
          content="Pencerelerinizi estetik ve dayanıklı mermer denizliklerle tamamlayın. Eskişehir’de kaliteli çözümler Genç Mermer’de."
        />
        <meta
          property="og:image"
          content="https://www.gencmermer.com.tr/img/mermer-parallax.jpg"
        />
        <meta
          property="og:url"
          content="https://www.gencmermer.com.tr/hizmetlerimiz/denizlik"
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
                Denizlik
              </h1>
              <h4>
                Doğal taş denizlik çözümlerimizle mekanlarınıza zarafet katın.
                Dayanıklı ve şık tasarımlar, her ihtiyaca uygun şekilde
                üretilmektedir.
              </h4>
              <br />
              <Link href="/Iletisim">
                <Button color="primary" size="lg" rel="noopener noreferrer">
                  BİZİMLE İLETİŞİME GEÇİN
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <DenizlikSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
