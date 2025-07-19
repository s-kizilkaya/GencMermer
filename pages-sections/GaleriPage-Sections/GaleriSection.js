import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles((theme) => ({
  ...styles,
  kategoriButonGrup: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    marginBottom: 32,
    flexWrap: "wrap",
    ["@media (max-width:600px)" ]: {
      flexDirection: "column",
      alignItems: "stretch",
      gap: 12,
    },
  },
  slideContainer: {
    height: "300px",
    padding: "0 10px",
    boxSizing: "border-box",
    marginBottom: "24px",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "6px",
    objectFit: "cover",
  },
  slickDots: {
    bottom: "-30px",
  },
}));

const galleryKategoriler = [
  {
    key: "mutfak-tezgahi",
    label: "Mutfak Tezgahı",
    images: [
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
    ],
  },
  {
    key: "kabir",
    label: "Kabir",
    images: [
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
    ],
  },
  {
    key: "evye-ankastre",
    label: "Evye & Ankastre",
    images: [
      "/img/hizmetlerimiz/evye-ankastre/galeri/1.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/2.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/3.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/4.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/5.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/6.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/7.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/8.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/9.jpeg",
      "/img/hizmetlerimiz/evye-ankastre/galeri/10.jpeg",
    ],
  },
  {
    key: "basamak",
    label: "Basamak",
    images: [
      "/img/hizmetlerimiz/basamak/galeri/1.jpeg",
      "/img/hizmetlerimiz/basamak/galeri/2.jpeg",
      "/img/hizmetlerimiz/basamak/galeri/3.jpeg",
      "/img/hizmetlerimiz/basamak/galeri/4.jpeg",
      "/img/hizmetlerimiz/basamak/galeri/5.jpeg",
      "/img/hizmetlerimiz/basamak/galeri/6.jpeg",
    ],
  },
  {
    key: "denizlik",
    label: "Denizlik",
    images: [
      "/img/hizmetlerimiz/denizlik/galeri/1.jpeg",
      "/img/hizmetlerimiz/denizlik/galeri/2.jpeg",
      "/img/hizmetlerimiz/denizlik/galeri/3.jpeg",
      "/img/hizmetlerimiz/denizlik/galeri/4.jpeg",
      "/img/hizmetlerimiz/denizlik/galeri/5.jpeg",
      "/img/hizmetlerimiz/denizlik/galeri/6.jpeg",
      "/img/hizmetlerimiz/denizlik/galeri/7.jpeg",
      "/img/hizmetlerimiz/denizlik/galeri/8.jpeg",
    ],
  },
  {
    key: "stok",
    label: "Stok",
    images: [
      "/img/galeri/stok/1.jpeg",
      "/img/galeri/stok/2.jpeg",
      "/img/galeri/stok/3.jpeg",
      "/img/galeri/stok/4.jpeg",
      "/img/galeri/stok/5.jpeg",
      "/img/galeri/stok/6.jpeg",
    ],
  },
];

export default function GaleriSection() {
  const classes = useStyles();
  const [selectedKategori, setSelectedKategori] = useState(galleryKategoriler[0].key);
  const currentKategori = galleryKategoriler.find(kategori => kategori.key === selectedKategori);



  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Öne Çıkan Çalışmalarımız</h2>
          <h5 className={classes.description}>
            Kalite ve estetiği bir araya getirdiğimiz projelerimizden bazıları.
          </h5>
        </GridItem>
      </GridContainer>
      {/* Kategori Seçimi */}
      <div className={classes.kategoriButonGrup}>
        {galleryKategoriler.map((kategori) => (
          <button
            key={kategori.key}
            onClick={() => setSelectedKategori(kategori.key)}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: selectedKategori === kategori.key ? "2px solid #8b0020" : "2px solid #8b0020",
              background: selectedKategori === kategori.key ? "#8b0020" : "#fff",
              color: selectedKategori === kategori.key ? "#fff" : "#8b0020",
              fontWeight: selectedKategori === kategori.key ? "bold" : "normal",
              cursor: "pointer",
              transition: "all 0.2s",
              outline: "none",
              boxShadow: selectedKategori === kategori.key ? "0 2px 8px rgba(139,0,32,0.15)" : "none",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = selectedKategori === kategori.key ? "#8b0020" : "#f7e6eb";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = selectedKategori === kategori.key ? "#8b0020" : "#fff";
            }}
          >
            {kategori.label}
          </button>
        ))}
      </div>
      {/* Seçili kategorinin resimleri */}
      <GridContainer>
        {currentKategori.images.map((img, i) => (
          <GridItem xs={12} sm={4} md={4} key={i}>
            <div className={classes.slideContainer}>
              <img src={img} alt={`Galeri ${i + 1}`} className={classes.img} />
            </div>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}
