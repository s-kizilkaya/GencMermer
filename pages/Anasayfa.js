import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPage.js";

// Sections for this page
import HakkimizdaSection from "/pages-sections/AnasayfaPage-Sections/HakkimizdaSection";
import UrunlerimizSection from "/pages-sections/AnasayfaPage-Sections/UrunlerimizSection";
import ReferanslarimizSection from "/pages-sections/AnasayfaPage-Sections/ReferanslarimizSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AnasayfaPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
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
      <Parallax filter responsive image="/img/MermerSiyah-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} style={{ color: "#800020" }}>
                Genç Mermer
              </h1>
              <h4>
                Doğanın eşsiz izlerini yaşam alanlarınıza taşıyoruz. Genç
                Mermer, zarif işçiliği ve özgün tasarımlarıyla her mekâna
                benzersiz bir değer katıyor. Taşın dayanıklılığını ve doğanın
                zarafetini bir araya getirerek ürettiğimiz mermerlerle, estetiği
                ve kaliteyi bir arada sunuyoruz.
              </h4>
              <br />
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <HakkimizdaSection />
          <UrunlerimizSection />
          <ReferanslarimizSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
