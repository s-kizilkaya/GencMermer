import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import { IconClockHour8, IconSparkles, IconShield } from "@tabler/icons-react";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function HakkimizdaDegerlerSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Değerlerimiz</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Özel Tasarım & Uygulama"
              description="İhtiyacınıza uygun özel ölçü ve tasarımlar sunarak, projelerinizi hayal ettiğiniz gibi gerçeğe dönüştürüyoruz. Her detayda mükemmelliği hedefliyoruz."
              icon={<IconSparkles />}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Hızlı & Güvenilir İşçilik"
              description="İşlerinizi zamanında ve titizlikle tamamlayarak, en kısa sürede sonuç almanızı sağlıyoruz. Müşteri memnuniyetini önceliğimiz haline getiriyoruz."
              icon={<IconClockHour8 />}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Kalite & Sorunsuz Hizmet"
              description="Herhangi bir sorunla karşılaştığınızda, hızlı ve etkili çözümler sunmak için buradayız. Sizin memnuniyetiniz, bizim önceliğimizdir."
              icon={<IconShield />}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
