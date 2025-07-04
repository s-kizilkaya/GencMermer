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

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPage.js";

// Sections for this page
import IletisimBilgileriSection from "/pages-sections/IletisimPage-Sections/IletisimBilgileriSection.js";
import IletisimCalismaSaatleriSection from "/pages-sections/IletisimPage-Sections/IletisimCalismaSaatleriSection.js";
import IletisimHaritaSection from "/pages-sections/IletisimPage-Sections/IletisimHaritaSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function IletisimPage(props) {
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
              <h1 className={classes.title} style={{ color: "#8b0020" }}>
                İletişim
              </h1>
              <h4>
                Genç Mermer ile iletişime geçin. Sorularınız, projeleriniz veya
                talepleriniz için bize ulaşın. Size en kısa sürede dönüş
                yapacağız.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <IletisimBilgileriSection />
          <IletisimCalismaSaatleriSection />
          <IletisimHaritaSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
