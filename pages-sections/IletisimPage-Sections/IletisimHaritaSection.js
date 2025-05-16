import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles((theme) => ({
  ...styles,
  mapContainer: {
    marginTop: "20px",
    marginBottom: "50px",
  },
  mapCard: {
    marginBottom: "30px",
  },
  mapFrame: {
    width: "100%",
    height: "450px",
    border: 0,
  },
}));

export default function IletisimHaritaSection() {
  const classes = useStyles();
  
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Ulaşım Bilgilerimiz</h2>
          <h5 className={classes.description}>
            Aşağıdaki haritayı kullanarak konumumuzu görebilir ve bize kolayca ulaşabilirsiniz.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.mapContainer}>
        <GridItem xs={12} sm={12} md={12}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d766.5137337530707!2d30.469005169640095!3d39.78332252882037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc17c3e82d7c35%3A0x454625649a4d87f5!2sgen%C3%A7%20mermer!5e0!3m2!1sen!2str!4v1747396305786!5m2!1sen!2str" 
            className={classes.mapFrame}
            allowFullScreen=""
            loading="lazy"
            title="Genç Mermer Konum"
              ></iframe>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h5 className={classes.description}>
            Toplu taşıma ile ulaşım: Tramvay Baksan durağından inip, 5 dakikalık yürüme mesafesindeyiz.<br />
            Özel araç ile ulaşım: İşyerimizin yakınında otopark alanı bulunmaktadır.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
