import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea2 from "/components/InfoArea/InfoArea2.js";

import { IconStairs } from "@tabler/icons-react";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles((theme) => ({
  ...styles,
  cardTitle: {
    color: "#800020",
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

export default function BasamakSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingBottom: "0px" }}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Basamak Hizmetlerimiz</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, merdiven basamaklarınız için estetik ve
            dayanıklı çözümler sunuyoruz. Doğal taşın sağlamlığı ve şıklığı ile
            merdiven basamaklarınız hem göz alıcı hem de güvenli olacak.
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ marginTop: "32px" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Mermer Basamaklar"
              description="Mermer basamaklarımız, klasik ve zarif bir görünüm sunar. Doğal taşın asaleti ile mekanlarınıza değer katar. Farklı renk ve desen seçenekleriyle her tarza uyum sağlar."
              image="/img/mermerBasamak.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Granit Basamaklar"
              description="Granit basamaklarımız, yüksek dayanıklılığı ve şık görünümü bir arada sunar. Yoğun kullanım alanları için ideal olan granit basamaklar, uzun yıllar boyunca ilk günkü görünümünü korur."
              image="/img/granitBasamak.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Özel Tasarım Basamaklar"
              description="Özel tasarım basamaklarımız, mekanınızın tarzına ve ihtiyaçlarınıza göre şekillendirilir. Farklı kenar profilleri ve yüzey işlemeleri ile basamaklarınıza özgün bir karakter kazandırıyoruz."
              image="/img/OzelTasarimBasamak.webp"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea2
              title="Güvenlik ve Estetik Bir Arada"
              description="Genç Mermer olarak, basamak uygulamalarımızda güvenliği ve estetiği bir arada sunuyoruz. Kaymaz yüzey işlemeleri ve özel kenar profilleri ile güvenli bir kullanım sağlarken, doğal taşın eşsiz güzelliği ile mekanlarınıza değer katıyoruz. Profesyonel ekibimiz, ölçüm aşamasından montaja kadar tüm süreçte yanınızda olarak, sorunsuz bir uygulama garantisi veriyor."
              image="/img/bakimVeOnarimBasamak.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
