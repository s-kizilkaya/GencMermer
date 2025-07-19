import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea2 from "/components/InfoArea/InfoArea2.js";
import PhotoSlider from "/components/Slider/PhotoSlider";

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

export default function MutfakTezgahiSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ paddingBottom: "0px" }}>
      <GridContainer justifyContent="center">
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
              image="/img/hizmetlerimiz/mutfak-tezgahi/granit-tezgah.jpg"
              imageColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Mermer Tezgahlar"
              description="Mermer tezgahlarımız, klasik ve zarif bir görünüm sunar. Her mermerin kendine özgü damar yapısı, mutfağınıza benzersiz bir karakter katar. Özenle işlenen mermer tezgahlarımız, mutfağınızın değerini artırır."
              image="/img/hizmetlerimiz/mutfak-tezgahi/mermer-tezgah.jpg"
              imageColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Mermerit Tezgahlar"
              description="Mermerit tezgahlarımız, hijyenik ve dayanıklı yapısıyla leke tutmaz, kolay temizlenir. Isıya ve darbelere karşı dirençlidir. Şık görünümü ve renk seçenekleriyle mutfağınıza modern bir dokunuş katar."
              image="/img/hizmetlerimiz/mutfak-tezgahi/mermerit-tezgah.jpg"
              imageColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea2
              title="Balenco Tezgahlar"
              description="Balenco tezgahlarımız, modern mutfaklar için yüksek dayanıklılık ve estetik sunar. Leke tutmayan, kolay temizlenen ve çizilmeye karşı dirençli yapısıyla uzun ömürlü kullanım sağlar. Geniş renk ve doku seçenekleriyle mutfağınıza şıklık katar."
              image="/img/hizmetlerimiz/mutfak-tezgahi/belenco-tezgah.jpg"
              imageColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea2
              title="Özel Tasarım Tezgahlar"
              description="Genç Mermer olarak, özel tasarım tezgahlar üretiyoruz. Farklı kenar profilleri, özel kesimler ve entegre çözümler ile mutfağınızı kişiselleştiriyoruz. Profesyonel ekibimiz, ölçüm aşamasından montaja kadar tüm süreçte yanınızda olarak, hayalinizdeki mutfağa kavuşmanızı sağlıyor."
              image="/img/hizmetlerimiz/mutfak-tezgahi/ozel-tasarim-tezgah.webp"
              imageColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <PhotoSlider
            title="Mutfak Tezgahı Galerisi"
            description="Mutfak Tezgahı uygulamalarımızdan örnekler."
            images={[
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/1.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/2.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/3.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/mermerit.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/4.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/5.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/cimstone1.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/cimstone2.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/cimstone3.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/6.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/7.jpeg",
              "/img/hizmetlerimiz/mutfak-tezgahi/galeri/8.jpeg",
            ]}
          />
          </GridItem>
        </GridContainer>
      </div>      
    </div>
  );
}
