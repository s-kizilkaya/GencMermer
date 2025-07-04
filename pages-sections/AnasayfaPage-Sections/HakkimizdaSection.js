import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";
import { IconSparkles, IconShield, IconClockHour8 } from "@tabler/icons-react";

const useStyles = makeStyles(styles);

export default function HakkimizdaSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Hakkımızda</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, mermer sektöründe kaliteli çözümler sunma
            konusundaki kararlılığımızla tanınmaktayız. Her projede, doğal taşın
            estetiği ve dayanıklılığını ön planda tutarak, müşteri memnuniyetini
            sağlamak için özveriyle çalışıyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Özel Tasarım & Uygulama"
              description="İhtiyacınıza uygun özel ölçü ve tasarımlar sunarak, projelerinizi hayal ettiğiniz gibi gerçeğe dönüştürüyoruz. Her detayda mükemmelliği hedefliyoruz."
              icon={<IconSparkles />}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Hızlı & Güvenilir İşçilik"
              description="İşlerinizi zamanında ve titizlikle tamamlayarak, en kısa sürede sonuç almanızı sağlıyoruz. Müşteri memnuniyetini önceliğimiz haline getiriyoruz."
              icon={<IconClockHour8 />}
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Kalite & Sorunsuz Hizmet"
              description="Herhangi bir sorunla karşılaştığınızda, hızlı ve etkili çözümler sunmak için buradayız. Sizin memnuniyetiniz, bizim önceliğimizdir."
              icon={<IconShield />}
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
