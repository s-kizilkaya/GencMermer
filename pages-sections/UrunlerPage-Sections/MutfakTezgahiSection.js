import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea2 from "/components/InfoArea/InfoArea2.js";

import { IconRectangle } from "@tabler/icons-react";

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

export default function MutfakTezgahiSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingBottom: "0px" }}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Mutfak Tezgahı Hizmetlerimiz</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, mutfak tezgahı konusunda uzmanlaşmış ekibimizle,
            doğal taşın estetiğini ve dayanıklılığını mutfaklarınıza taşıyoruz.
            Farklı renk ve desen seçenekleriyle, her zevke ve her mutfak
            tasarımına uygun çözümler sunuyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ marginTop: "32px" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Granit Tezgahlar"
              description="Granit tezgahlarımız, doğal güzelliği ve dayanıklılığı bir arada sunar. Isıya, çizilmeye ve lekelere karşı yüksek dirençli granit tezgahlar, mutfaklarınızda uzun yıllar boyunca ilk günkü görünümünü korur."
              image="/img/granitTezgah.jpg"
              imageColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Mermer Tezgahlar"
              description="Mermer tezgahlarımız, klasik ve zarif bir görünüm sunar. Her mermerin kendine özgü damar yapısı, mutfağınıza benzersiz bir karakter katar. Özenle işlenen mermer tezgahlarımız, mutfağınızın değerini artırır."
              image="/img/mermerTezgah.jpg"
              imageColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Kuvars Tezgahlar"
              description="Kuvars tezgahlarımız, doğal taşın güzelliği ile modern teknolojinin avantajlarını bir araya getirir. Gözeneksiz yapısı sayesinde bakteri barındırmaz, kolay temizlenir ve leke tutmaz. Geniş renk seçenekleriyle her tarza uyum sağlar."
              image="/img/kuvarsTezgah.webp"
              imageColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea2
              title="Özel Tasarım Tezgahlar"
              description="Genç Mermer olarak, ihtiyaçlarınıza ve zevkinize özel tasarım tezgahlar üretiyoruz. Farklı kenar profilleri, özel kesimler ve entegre evye çözümleri ile mutfağınızı kişiselleştiriyoruz. Profesyonel ekibimiz, ölçüm aşamasından montaja kadar tüm süreçte yanınızda olarak, hayalinizdeki mutfağa kavuşmanızı sağlıyor."
              image="/img/ozelTasarimTezgah.webp"
              imageColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
