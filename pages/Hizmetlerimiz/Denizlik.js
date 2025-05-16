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
                Denizlik
              </h1>
              <h4>
                Doğal taş denizlik çözümlerimizle mekanlarınıza zarafet katın. 
                Dayanıklı ve şık tasarımlar, her ihtiyaca uygun şekilde üretilmektedir.
              </h4>
              <br />
              <Link href="/Iletisim">
                <Button
                  color="primary"
                  size="lg"
                  rel="noopener noreferrer"
                >
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
