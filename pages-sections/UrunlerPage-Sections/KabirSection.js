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

import { useState } from "react";

export default function KabirSection() {
  const classes = useStyles();
  const [yukseklik, setYukseklik] = useState(20);
  const [adet, setAdet] = useState(0);
  const [teslimTipi, setTeslimTipi] = useState("atolye");

  // Fiyat tablosu
  const fiyatTablosu = {
    20: { atolye: 7500, montaj: 18000 },
    30: { atolye: 8000, montaj: 20000 }, 
    40: { atolye: 8500, montaj: 22000 },
  };

  const fiyat =
    fiyatTablosu[yukseklik] && fiyatTablosu[yukseklik][teslimTipi]
      ? fiyatTablosu[yukseklik][teslimTipi] * adet
      : 0;

  return (
    <div className={classes.section} style={{ paddingBottom: "0px" }}>
      <GridContainer justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Kabir Hizmetlerimiz</h2>
          <h5 className={classes.description}>
            Genç Mermer olarak, sevdiklerinizin anısına yakışır, saygı ve
            estetik anlayışla hazırlanan kabir uygulamaları sunuyoruz. Kaliteli
            malzemeler ve usta işçiliğimizle, anılarınızı ölümsüzleştiriyoruz.
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ marginTop: "32px" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Mermer Kabirler"
              description="Mermer kabirlerimiz, zarafeti ve dayanıklılığı bir arada sunar. Doğal taşın asaletini yansıtan tasarımlarımız, sevdiklerinizin anısına yakışır şekilde özenle hazırlanır."
              image="/img/hizmetlerimiz/kabir/mermer-kabir.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Granit Kabirler"
              description="Granit kabirlerimiz, uzun ömürlü ve dayanıklı yapısıyla öne çıkar. Farklı renk ve desen seçenekleriyle, sevdiklerinizin anısını yaşatacak özel tasarımlar sunuyoruz."
              image="/img/hizmetlerimiz/kabir/granit-kabir.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea2
              title="Özel Tasarım Kabirler"
              description="Özel tasarım kabirlerimiz, kişisel tercihlere ve isteklere göre şekillendirilir. Sevdiklerinizin anısına özel, benzersiz ve anlamlı tasarımlar oluşturuyoruz."
              image="/img/hizmetlerimiz/kabir/ozel-tasarim-kabir.jpg"
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea2
              title="Kabir Bakım ve Onarım Hizmetleri"
              description="Genç Mermer olarak, mevcut kabirlerin bakım ve onarım hizmetlerini de sunuyoruz. Zamanla oluşan yıpranmaları gidererek, kabirlerin ilk günkü görünümüne kavuşmasını sağlıyoruz. Profesyonel ekibimiz, saygı ve özenle çalışarak, sevdiklerinizin anısına yakışır bir hizmet sunuyor."
              image="/img/hizmetlerimiz/kabir/kabir-bakim-ve-onarim-hizmetleri.jpg"
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
        <GridContainer spacing={2} style={{ marginBottom: 24 }}>
        <GridItem xs={12} sm={12} md={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <GridContainer spacing={2} style={{ width: '100%', marginBottom: 8, justifyContent: 'center' }}>
            <GridItem xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <label style={{ fontWeight: 700, color: '#8b0020', fontSize: 18, marginBottom: 6 }}>
                Yükseklik (cm):
              </label>
              <select
                value={yukseklik}
                onChange={e => setYukseklik(Number(e.target.value))}
                style={{
                  padding: '12px 16px',
                  borderRadius: 6,
                  border: '1.5px solid #8b0020',
                  minWidth: 160,
                  fontSize: 18,
                  fontWeight: 500,
                  color: '#222',
                  background: '#fff',
                  outline: 'none',
                  width: '100%',
                  maxWidth: 260,
                }}
              >
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
              </select>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <label style={{ fontWeight: 700, color: '#8b0020', fontSize: 18, marginBottom: 6 }}>
                Adet:
              </label>
              <select
                value={adet}
                onChange={e => setAdet(Number(e.target.value))}
                style={{
                  padding: '12px 16px',
                  borderRadius: 6,
                  border: '1.5px solid #8b0020',
                  minWidth: 160,
                  fontSize: 18,
                  fontWeight: 500,
                  color: '#222',
                  background: '#fff',
                  outline: 'none',
                  width: '100%',
                  maxWidth: 260,
                }}
              >
                <option key={0} value={0}>
                    {0}
                  </option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </GridItem>
          </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',  marginBottom: 8 }}>
          {adet > 0 &&
          <div style={{ fontSize: 22, fontWeight: 700, color: '#8b0020', width: '100%' }}>
          Atölye Teslim Fiyat:&nbsp; 
          <span>
          {(fiyatTablosu[yukseklik].atolye * adet).toLocaleString('tr-TR') + ' TL'}
          </span>
          </div>}
          </GridItem>
          <GridItem xs={12} sm={12} md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: 8, marginBottom: 8 }}>
          {adet > 0 &&
          <div style={{ fontSize: 22, fontWeight: 700, color: '#8b0020', width: '100%' }}>
          Montaj Dahil Fiyat:&nbsp; 
          <span>
          {(fiyatTablosu[yukseklik].montaj * adet).toLocaleString('tr-TR') + ' TL'}
          </span>
          </div>}
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <PhotoSlider
            title="Kabir Galerisi"
            description="Kabir uygulamalarımızdan örnekler."
            images={[
              "/img/hizmetlerimiz/kabir/galeri/1.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/2.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/3.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/4.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/5.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/6.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/7.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/8.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/9.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/10.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/11.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/12.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/13.jpeg",  
              "/img/hizmetlerimiz/kabir/galeri/14.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/15.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/16.jpeg",
              "/img/hizmetlerimiz/kabir/galeri/17.jpeg",
            ]}
          />
          </GridItem>
        </GridContainer>
      </div>      
    </div>
  );
}
