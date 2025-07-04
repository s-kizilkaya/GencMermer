import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function IletisimCalismaSaatleriSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Çalışma Saatlerimiz</h2>
          <h5 className={classes.description}>
            Pazartesi - Cuma: 09:00 - 18:00
            <br />
            Cumartesi: 09:00 - 14:00
            <br />
            Pazar: Kapalı
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
