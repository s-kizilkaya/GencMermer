import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import { IconMapPin, IconPhone, IconBrandInstagram,IconBrandFacebook } from "@tabler/icons-react";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function IletisimBilgileriSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>İletişim Bilgilerimiz</h2>
          <h5 className={classes.description}>
            Aşağıdaki iletişim bilgilerinden bize ulaşabilir, sorularınızı
            sorabilir ve projeleriniz hakkında bilgi alabilirsiniz. En kısa
            sürede size geri dönüş yapacağız.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <InfoArea
            title="Adres"
            description="Uluönder Mahallesi, Baksan Sanayi Sitesi 81 / 4, 26200 Tepebaşı / Eskişehir, Türkiye"
            icon={<IconMapPin />}
            iconColor="primary"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Telefon"
            description={<a href="https://wa.me/905325928100" target="_blank" rel="noopener noreferrer">+90 (532) 592 81 00</a>}
            icon={<IconPhone />}
            iconColor="primary"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Instagram"
            description={<a href="https://www.instagram.com/gencmermer26" target="_blank" rel="noopener noreferrer">gencmermer26</a>}
            icon={<IconBrandInstagram />}
            iconColor="primary"
            vertical
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InfoArea
            title="Facebook"
            description={<a href="https://tr-tr.facebook.com/people/Ali-Kizilkaya/pfbid0PPgS35FLqi3Cai6ajFRLQSRPQeqwJvNUkn6oUuw8ibP2jx41XobtqY2tMCioeVCul" target="_blank" rel="noopener noreferrer">Ali Kızılkaya</a>}
            icon={<IconBrandFacebook />}
            iconColor="primary"
            vertical
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
