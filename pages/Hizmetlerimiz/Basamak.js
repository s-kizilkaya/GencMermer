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
import BasamakSection from "/pages-sections/UrunlerPage-Sections/BasamakSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function BasamakPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Genç Mermer | Basamak</title>
        <meta
          name="description"
          content="Genç Mermer ile estetik ve dayanıklı mermer basamak çözümleri. İç ve dış mekanlar için modern tasarımlarla uzun ömürlü basamak uygulamaları."
        />
        <meta
          name="keywords"
          content="Genç Mermer Basamak, Genç Mermer Merdiven Basamağı, Genç Mermer, Basamak Modelleri, Merdiven Basamağı, Mermer Merdiven, Eskişehir Mermer Basamak, Dış Mekan Basamak, İç Mekan Basamak, Genç Mermer"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Genç Mermer | Basamak" />
        <meta
          property="og:description"
          content="Mermer merdiven ve basamaklarda şıklık ve sağlamlığı bir arada sunuyoruz. Projeleriniz için ideal çözümler."
        />
        <meta
          property="og:image"
          content="https://www.gencmermer.com.tr/img/mermer-parallax.jpg"
        />
        <meta
          property="og:url"
          content="https://www.gencmermer.com.tr/hizmetlerimiz/basamak"
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
                Basamak
              </h1>
              <h4>
                Mermer basamaklarımız, hem güvenlik hem de estetik açıdan
                mükemmel bir seçimdir. Uzun ömürlü ve şık çözümler sunuyoruz.
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
          <BasamakSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
