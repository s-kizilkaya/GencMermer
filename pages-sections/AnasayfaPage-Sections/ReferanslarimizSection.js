import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ReferanslarimizSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title} style={{ width: "100%" }}>
            Referanslar
          </h2>
          <h5 className={classes.description}>
            Daha önce birlikte çalıştığımız firmaların bazıları.
            İşbirliklerimizle kalitemizi ve güvenilirliğimizi artırıyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={4}
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={classes.reference}>
              <img
                src="/img/anasayfa/referanslarimiz/yildiz-pen.png"
                alt="Referans 2"
                className={classes.referenceImage}
              />
            </div>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={4}
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className={classes.reference}
              style={{ padding: 20, paddingY: 10, backgroundColor: "#8b0020" }}
            >
              <img
                src="/img/anasayfa/referanslarimiz/cobanlar.png"
                alt="Referans 1"
                className={classes.referenceImage}
              />
            </div>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={4}
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={classes.reference}>
              <img
                src="/img/anasayfa/referanslarimiz/tac-pen.png"
                alt="Referans 3"
                className={classes.referenceImage}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
