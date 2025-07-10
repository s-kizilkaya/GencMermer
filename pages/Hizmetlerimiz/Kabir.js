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
import KabirSection from "/pages-sections/UrunlerPage-Sections/KabirSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function KabirPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Genç Mermer | Kabir </title>
        <meta
          name="description"
          content="Genç Mermer olarak, kabir mermer uygulamalarında uzun ömürlü ve estetik çözümler sunuyoruz. Kaliteli işçilik ile saygı ve özeni bir araya getiriyoruz."
        />
        <meta
          name="keywords"
          content="Genç Mermer Kabir, Genç Mermer Mezar, Genç Mermer, Kabir, Mezar, Kabir Mermeri, Mezar Mermeri, Mermer Kabir, Mermer Mezar, Kabir Taşı, Mezar Taşı, Eskişehir Kabir, Eskişehir Mezar, Mezar Uygulamaları"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Genç Mermer | Kabir" />
        <meta
          property="og:description"
          content="Kabir uygulamalarında uzun ömürlü ve zarif mermer çözümleri. Saygı, estetik ve dayanıklılık Genç Mermer farkıyla."
        />
        <meta
          property="og:image"
          content="https://www.gencmermer.com.tr/img/mermer-parallax.jpg"
        />
        <meta
          property="og:url"
          content="https://www.gencmermer.com.tr/hizmetlerimiz/kabir"
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
                Kabir
              </h1>
              <h4>
                Mermer kabir uygulamalarımız, saygı ve estetik anlayışla
                hazırlanır. Anılarınıza değer katacak özel tasarımlar sunuyoruz.
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
          <KabirSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
