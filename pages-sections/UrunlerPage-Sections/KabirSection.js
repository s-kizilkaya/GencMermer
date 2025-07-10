import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea2 from "/components/InfoArea/InfoArea2.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles((theme) => ({
  ...styles,
  cardTitle: {
    color: "#8b0020",
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "500",
    fontFamily: "'Roboto Slab', 'Times New Roman', serif",
    marginBottom: "1rem",
    textDecoration: "none",
    textAlign: "center",
  },
  cardDescription: {
    textAlign: "center",
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px",
    },
  },
}));

export default function KabirSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingBottom: "0px" }}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Kabir Hizmetlerimiz</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, sevdiklerinizin anısına yakışır, saygı ve
            estetik anlayışla hazırlanan kabir uygulamaları sunuyoruz. Kaliteli
            malzemeler ve usta işçiliğimizle, anılarınızı ölümsüzleştiriyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ marginTop: "32px" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Mermer Kabirler"
              description="Mermer kabirlerimiz, zarafeti ve dayanıklılığı bir arada sunar. Doğal taşın asaletini yansıtan tasarımlarımız, sevdiklerinizin anısına yakışır şekilde özenle hazırlanır."
              image="/img/hizmetlerimiz/kabir/mermer-kabir.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Granit Kabirler"
              description="Granit kabirlerimiz, uzun ömürlü ve dayanıklı yapısıyla öne çıkar. Farklı renk ve desen seçenekleriyle, sevdiklerinizin anısını yaşatacak özel tasarımlar sunuyoruz."
              image="/img/hizmetlerimiz/kabir/granit-kabir.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Özel Tasarım Kabirler"
              description="Özel tasarım kabirlerimiz, kişisel tercihlere ve isteklere göre şekillendirilir. Sevdiklerinizin anısına özel, benzersiz ve anlamlı tasarımlar oluşturuyoruz."
              image="/img/hizmetlerimiz/kabir/ozel-tasarim-kabir.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea2
              title="Kabir Bakım ve Onarım Hizmetleri"
              description="Genç Mermer olarak, mevcut kabirlerin bakım ve onarım hizmetlerini de sunuyoruz. Zamanla oluşan yıpranmaları gidererek, kabirlerin ilk günkü görünümüne kavuşmasını sağlıyoruz. Profesyonel ekibimiz, saygı ve özenle çalışarak, sevdiklerinizin anısına yakışır bir hizmet sunuyor."
              image="/img/hizmetlerimiz/kabir/kabir-bakim-ve-onarim-hizmetleri.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
