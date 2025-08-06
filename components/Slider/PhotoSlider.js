import React from "react";
import Slider from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "/styles/jss/nextjs-material-kit/pages/AnasayfaPageSections/productStyle.js";

const useStyles = makeStyles((theme) => ({
  ...styles,
  slideContainer: {
    height: "300px",
    padding: "0 10px",
    boxSizing: "border-box",
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

export default function PhotoSlider({
  title = "",
  description = "",
  images = [],
}) {
  const classes = useStyles();
  const settings = {
    className: classes.slickDots,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{title}</h2>
          <h5 className={classes.description}>
            {description}
          </h5>
        </GridItem>
      </GridContainer>
      <div style={{ marginBottom: "32px" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Slider {...settings}>
              {images.map((img, i) => (
                <div key={i} className={classes.slideContainer}>
                  <img
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className={classes.img}
                  />
                </div>
              ))}
            </Slider>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
