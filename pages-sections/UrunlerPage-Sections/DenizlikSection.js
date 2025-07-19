import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea2 from "/components/InfoArea/InfoArea2.js";
import PhotoSlider from "/components/Slider/PhotoSlider";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles((theme) => ({
  ...styles,
  textFieldCustom: {
    '& label.Mui-focused': {
      color: '#8b0020',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#ced4da',
      },
      '&:hover fieldset': {
        borderColor: '#8b0020',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#8b0020',
      },
    },
  },
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

export default function DenizlikSection() {
  const classes = useStyles();
  const en = 20;
  const [boy, setBoy] = useState(0);
  const birimFiyat = 1250; 
  const fiyat = (parseFloat(en) > 0 && parseFloat(boy) > 0) ? (parseFloat(boy)/100) * birimFiyat : 0;

  return (
    <div className={classes.section} style={{ paddingBottom: "0px" }}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Denizlik Hizmetlerimiz</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, pencere denizlikleriniz için dayanıklı ve
            estetik çözümler sunuyoruz. Doğal taşın zarafeti ile pencerelerinize
            değer katarken, uzun ömürlü kullanım sağlıyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ marginTop: "32px" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Mermer Denizlikler"
              description="Mermer denizliklerimiz, klasik ve zarif bir görünüm sunar. Doğal taşın eşsiz dokusu ve desenleri ile her pencereye özel bir karakter kazandırır."
              image="/img/hizmetlerimiz/denizlik/mermer-denizlik.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Granit Denizlikler"
              description="Granit denizliklerimiz, yüksek dayanıklılığı ve şık görünümü bir arada sunar. Dış etkenlerden etkilenmeyen yapısı ile uzun yıllar boyunca ilk günkü görünümünü korur."
              image="/img/hizmetlerimiz/denizlik/granit-denizlik.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Özel Tasarım Denizlikler"
              description="Özel tasarım denizliklerimiz, evinizin tarzına ve ihtiyaçlarınıza göre şekillendirilir. Farklı kenar profilleri ve yüzey işlemeleri ile pencerelerinize özgün bir görünüm kazandırıyoruz."
              image="/img/hizmetlerimiz/denizlik/ozel-tasarim-denizlik.webp"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea2
              title="Profesyonel Uygulama"
              description="Genç Mermer olarak, denizlik uygulamalarımızda profesyonel bir hizmet sunuyoruz. Hassas ölçüm, kaliteli malzeme ve uzman işçilik ile sorunsuz bir uygulama garantisi veriyoruz. Denizliklerinizin su ve nem gibi dış etkenlerden etkilenmemesi için gerekli tüm önlemleri alarak, uzun ömürlü bir kullanım sağlıyoruz."
              image="/img/hizmetlerimiz/denizlik/profesyonel-uygulama.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h4 className={classes.title}>
            Tahmini Fiyat Almak İçin Bilgileri Girin:
          </h4>
        </div>
        <GridContainer spacing={2} style={{ marginBottom: 24 }} justifyContent="center">
          <GridItem xs={10} sm={4} md={3} style={{ textAlign: 'center' }}>
            <TextField
              label="En (cm)"
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{ min: 0 }}
              value={en}
              className={classes.textFieldCustom}
            />
          </GridItem>
          <GridItem xs={10} sm={4} md={3} style={{ textAlign: 'center' }}>
            <TextField
              label="Boy (cm)"
              variant="outlined"
              fullWidth
              type="number"
              inputProps={{ min: 0 }}
              value={typeof boy !== 'undefined' ? boy : ''}
              onChange={e => setBoy(e.target.value)}
              className={classes.textFieldCustom}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 8, marginBottom: 8 }}>
          {fiyat > 0 &&
            <div style={{ fontSize: 22, fontWeight: 700, color: '#8b0020', width: '100%' }}>
              Ortalama Fiyat:&nbsp; 
              <span>
                 {fiyat.toLocaleString('tr-TR') + ' TL'}
              </span>
            </div>}
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <PhotoSlider
            title="Denizlik Galerisi"
            description="Denizlik uygulamalarımızdan örnekler."
            images={[
              "/img/hizmetlerimiz/denizlik/galeri/1.jpeg",
              "/img/hizmetlerimiz/denizlik/galeri/2.jpeg",
              "/img/hizmetlerimiz/denizlik/galeri/3.jpeg",
              "/img/hizmetlerimiz/denizlik/galeri/4.jpeg",
              "/img/hizmetlerimiz/denizlik/galeri/5.jpeg",
              "/img/hizmetlerimiz/denizlik/galeri/6.jpeg",
              "/img/hizmetlerimiz/denizlik/galeri/7.jpeg",
              "/img/hizmetlerimiz/denizlik/galeri/8.jpeg",
            ]}
          />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
