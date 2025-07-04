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
import HakkimizdaDetaySection from "/pages-sections/HakkimizdaPage-Sections/HakkimizdaDetaySection.js";
import HakkimizdaDegerlerSection from "/pages-sections/HakkimizdaPage-Sections/HakkimizdaDegerlerSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HakkimizdaPage(props) {
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
                Hakkımızda
              </h1>
              <h4>
                Genç Mermer olarak, mermer sektöründe kaliteli çözümler sunma
                konusundaki kararlılığımızla tanınmaktayız. Her projede, doğal
                taşın estetiği ve dayanıklılığını ön planda tutarak, müşteri
                memnuniyetini sağlamak için özveriyle çalışıyoruz.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <HakkimizdaDetaySection />
          <HakkimizdaDegerlerSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
