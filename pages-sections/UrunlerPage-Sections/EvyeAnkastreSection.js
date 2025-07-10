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

export default function EvyeAnkastreSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingBottom: "0px" }}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Evye & Ankastre Hizmetlerimiz</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, mutfaklarınızı fonksiyonel ve estetik hale
            getiren evye ve ankastre kesim hizmetleri sunuyoruz. Özel ölçüm ve
            tasarım ile mutfağınıza mükemmel uyum sağlayan çözümler üretiyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ marginTop: "32px" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Evye Montajı"
              description="Evye montaj hizmetlerimiz, profesyonel ekibimiz tarafından titizlikle gerçekleştirilir. Tezgahınıza uygun evye seçimi ve montajı ile mutfağınızda kullanım kolaylığı sağlıyoruz."
              image="/img/hizmetlerimiz/evye-ankastre/evye-montaji.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Ankastre Kesim"
              description="Ankastre cihazlarınız için hassas kesim hizmetleri sunuyoruz. Ocak, fırın ve davlumbaz gibi ankastre ürünler için tezgahınızda milimetrik ölçülerle kesim yaparak, mükemmel uyum sağlıyoruz."
              image="/img/hizmetlerimiz/evye-ankastre/ankastre-kesim.webp"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Özel Çözümler"
              description="Mutfağınızın ihtiyaçlarına ve kullanım alışkanlıklarınıza göre özel çözümler üretiyoruz. Farklı evye modelleri ve ankastre cihazlarınıza uygun kesimlerle, mutfağınızı daha fonksiyonel hale getiriyoruz."
              image="/img/hizmetlerimiz/evye-ankastre/ozel-cozumler.webp"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea2
              title="Entegre Çözümler"
              description="Genç Mermer olarak, mutfak tezgahı ve evye-ankastre hizmetlerini bir arada sunarak, bütünsel çözümler üretiyoruz. Tezgah seçiminden evye montajına ve ankastre kesimlerine kadar tüm süreçleri tek elden yöneterek, zaman ve maliyet tasarrufu sağlıyoruz. Profesyonel ekibimiz, projenizin her aşamasında yanınızda olarak, sorunsuz bir uygulama garantisi veriyor."
              image="/img/hizmetlerimiz/evye-ankastre/entegre-cozumler.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
