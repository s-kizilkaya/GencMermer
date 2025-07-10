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
import EvyeAnkastreSection from "/pages-sections/UrunlerPage-Sections/EvyeAnkastreSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function EvyeAnkastrePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Genç Mermer | Evye & Ankastre </title>
        <meta
          name="description"
          content="Genç Mermer ile mutfaklarınıza estetik ve işlevsellik kazandırın. Evye ve ankastre mermer uygulamalarında kaliteli çözümler sunuyoruz."
        />
        <meta
          name="keywords"
          content="Genç Mermer Evye, Genç Mermer Ankastre, Genç Mermer, Evye Montaj, Ankastre Kesim, Mutfak Tezgahı, Evye, Ankastre, Eskişehir Evye Ankastre, Genç Mermer Mutfak, Mermer Uygulamaları"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Genç Mermer | Evye & Ankastre" />
        <meta
          property="og:description"
          content="Şık ve kullanışlı mutfaklar için evye & ankastre uygulamalarımızı keşfedin. Kaliteli işçilik Genç Mermer farkıyla."
        />
        <meta
          property="og:image"
          content="https://www.gencmermer.com.tr/img/mermer-parallax.jpg"
        />
        <meta
          property="og:url"
          content="https://www.gencmermer.com.tr/hizmetlerimiz/evyeankastre"
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
                Evye & Ankastre
              </h1>
              <h4>
                Evye ve ankastre kesim hizmetlerimiz, ihtiyacınıza özel olarak
                tasarlanmış çözümler sunar. Mermerin estetik görünümünü ve
                dayanıklılığını koruyarak, mutfaklarınıza fonksiyonellik ve
                şıklık katıyoruz.
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
          <EvyeAnkastreSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
