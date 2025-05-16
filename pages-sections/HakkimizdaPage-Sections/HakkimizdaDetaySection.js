import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import {
  IconEye,
  IconTargetArrow,
  
} from "@tabler/icons-react";
import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function HakkimizdaDetaySection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Hakkımızda</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, 2000 yılından bu yana mermer sektöründe kaliteli çözümler sunma
            konusundaki kararlılığımızla tanınmaktayız. Mermer ve doğal taş işleme konusundaki
            uzmanlığımızla, her projede müşteri memnuniyetini en üst düzeyde tutmayı hedefliyoruz.
            Deneyimli ekibimiz ve modern teknolojimizle, doğal taşın estetiğini ve dayanıklılığını
            yaşam alanlarınıza taşıyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Vizyonumuz"
              description="Doğal taş sektöründe yenilikçi yaklaşımlar ve üstün kalite anlayışıyla,
                ulusal ve uluslararası pazarda öncü bir marka olmak. Müşterilerimizin
                beklentilerini aşan çözümler sunarak, yaşam alanlarına değer katmak ve
                sektörde güvenilir bir referans noktası haline gelmek."
              icon={<IconEye />}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Misyonumuz"
              description="Doğal taşın eşsiz güzelliğini ve dayanıklılığını, modern tasarım anlayışı
                ve ustalıkla işleyerek müşterilerimize sunmak. Kaliteden ödün vermeden,
                zamanında teslim ve uygun fiyat politikasıyla, müşteri memnuniyetini en
                üst seviyede tutmak. Çevreye saygılı üretim süreçleri ve sosyal sorumluluk
                bilinciyle, topluma değer katmak."
              icon={<IconTargetArrow />}
              vertical
            />
          </GridItem>
        </GridContainer>
    </div>
  );
}
