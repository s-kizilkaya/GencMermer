import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
// No Card components needed anymore, only using InfoArea

import { IconBrandFlipboard } from "@tabler/icons-react";

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

export default function DenizlikSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Denizlik Hizmetlerimiz</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, pencere denizlikleriniz için dayanıklı ve estetik çözümler sunuyoruz. 
            Doğal taşın zarafeti ile pencerelerinize değer katarken, uzun ömürlü kullanım sağlıyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Mermer Denizlikler"
              description="Mermer denizliklerimiz, klasik ve zarif bir görünüm sunar. Doğal taşın eşsiz dokusu ve desenleri ile her pencereye özel bir karakter kazandırır."
              icon={<IconBrandFlipboard />}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Granit Denizlikler"
              description="Granit denizliklerimiz, yüksek dayanıklılığı ve şık görünümü bir arada sunar. Dış etkenlerden etkilenmeyen yapısı ile uzun yıllar boyunca ilk günkü görünümünü korur."
              icon={<IconBrandFlipboard />}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Özel Tasarım Denizlikler"
              description="Özel tasarım denizliklerimiz, evinizin tarzına ve ihtiyaçlarınıza göre şekillendirilir. Farklı kenar profilleri ve yüzey işlemeleri ile pencerelerinize özgün bir görünüm kazandırıyoruz."
              icon={<IconBrandFlipboard />}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea
              title="Profesyonel Uygulama"
              description="Genç Mermer olarak, denizlik uygulamalarımızda profesyonel bir hizmet sunuyoruz. Hassas ölçüm, kaliteli malzeme ve uzman işçilik ile sorunsuz bir uygulama garantisi veriyoruz. Denizliklerinizin su ve nem gibi dış etkenlerden etkilenmemesi için gerekli tüm önlemleri alarak, uzun ömürlü bir kullanım sağlıyoruz."
              icon={<IconBrandFlipboard />}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
