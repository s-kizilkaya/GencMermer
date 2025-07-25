import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Link from "next/link";
import InfoArea2 from "/components/InfoArea/InfoArea2.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function UrunlerimizSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingBottom: "0px" }}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Hizmetler</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, mutfak tezgahı, basamak, denizlik, petek ve
            kabir gibi inşaat taahhüt işlemleriyle sizlere hizmet vermekteyiz.
            Doğal taşın estetiğini ve sağlamlığını bir araya getirerek, her
            projede yüksek kalite sunmayı hedefliyoruz. Müşteri memnuniyetini ön
            planda tutarak, ihtiyacınıza özel çözümler üretiyoruz. Güvenilir ve
            kaliteli mermer uygulamaları için doğru yerdesiniz.
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ marginTop: "32px" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Link href="/Hizmetlerimiz/MutfakTezgahi">
              <a>
                <InfoArea2
                  title="Mutfak Tezgahı"
                  description="Kaliteli doğal taşlardan üretilen mutfak tezgahlarımız, estetik ve dayanıklılığı bir arada sunar. Özel tasarım seçeneklerimizle mutfaklarınıza şıklık katın."
                  image="/img/anasayfa/urunlerimiz/mutfak-tezgahi.jpg"
                  imageColor="primary"
                  vertical
                />
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link href="/Hizmetlerimiz/Kabir">
              <a>
                <InfoArea2
                  title="Kabir"
                  description="Mermer kabir uygulamalarımız, saygı ve estetik anlayışla hazırlanır. Anılarınıza değer katacak özel tasarımlar sunuyoruz."
                  image="/img/anasayfa/urunlerimiz/kabir.jpg"
                  imageColor="primary"
                  vertical
                />
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link href="/Hizmetlerimiz/EvyeAnkastre">
              <a>
                <InfoArea2
                  title="Evye & Ankastre"
                  description="Evye ve ankastre kesim hizmetlerimiz, ihtiyacınıza özel olarak tasarlanmış çözümler sunar. Mermerin estetik görünümünü ve dayanıklılığını koruyarak, mutfaklarınıza fonksiyonellik ve şıklık katıyoruz."
                  image="/img/anasayfa/urunlerimiz/evye-ankastre.avif"
                  imageColor="primary"
                  vertical
                />
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="/Hizmetlerimiz/Basamak">
              <a>
                <InfoArea2
                  title="Basamak"
                  description="Mermer basamaklarımız, hem güvenlik hem de estetik açıdan mükemmel bir seçimdir. Uzun ömürlü ve şık çözümler sunuyoruz."
                  image="/img/anasayfa/urunlerimiz/basamak.avif"
                  imageColor="primary"
                  vertical
                />
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="/Hizmetlerimiz/Denizlik">
              <a>
                <InfoArea2
                  title="Denizlik"
                  description="Doğal taş denizlik çözümlerimizle mekanlarınıza zarafet katın. Dayanıklı ve şık tasarımlar, her ihtiyaca uygun şekilde üretilmektedir."
                  image="/img/anasayfa/urunlerimiz/denizlik.jpg"
                  imageColor="primary"
                  vertical
                />
              </a>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
