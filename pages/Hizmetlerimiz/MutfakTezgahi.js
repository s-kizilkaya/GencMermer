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
import MutfakTezgahiSection from "/pages-sections/UrunlerPage-Sections/MutfakTezgahiSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function MutfakTezgahiPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Genç Mermer | Mutfak Tezgahı</title>
        <meta
          name="description"
          content="Genç Mermer ile şık ve dayanıklı mutfak tezgahı çözümleri. Doğal taşların zarafetiyle mutfağınızı güzelleştirin."
        />
        <meta
          name="keywords"
          content="Genç Mermer Mutfak Tezgahı, Genç Mermer, Mutfak Tezgahı, Mermer Mutfak Tezgahı, Granit Tezgah, Doğal Taş Tezgah, Eskişehir Mutfak Tezgahı, Genç Mermer Mutfak"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Genç Mermer | Mutfak Tezgahı" />
        <meta
          property="og:description"
          content="Dayanıklı ve estetik mutfak tezgahı çözümlerimizle mutfağınızı yenileyin. Kalite ve şıklık Genç Mermer’de."
        />
        <meta
          property="og:image"
          content="https://www.gencmermer.com.tr/img/mutfak-tezgahi-kapak.jpg"
        />
        <meta
          property="og:url"
          content="https://www.gencmermer.com.tr/hizmetlerimiz/mutfaktezgahi"
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
                Mutfak Tezgahı
              </h1>
              <h4>
                Kaliteli doğal taşlardan üretilen mutfak tezgahlarımız, estetik
                ve dayanıklılığı bir arada sunar. Özel tasarım seçeneklerimizle
                mutfaklarınıza şıklık katın.
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
          <MutfakTezgahiSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
