import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// CSS stillerini içe aktar
import styles from "/styles/jss/nextjs-material-kit/components/infoStyle2.js";

// CSS stillerini uygulayın
const useStyles = makeStyles(styles);

export default function InfoArea2(props) {
  const classes = useStyles();
  const { title, description, image, imageColor, vertical } = props;

  const imageWrapper = classNames({
    [classes.imageWrapper]: true, // iconWrapper yerine artık imageWrapper kullanıyoruz
    [classes[imageColor]]: true,
    [classes.imageWrapperVertical]: vertical, // varsa dikey görünüm için farklı stil
  });

  const imageClasses = classNames({
    [classes.image]: true, // icon yerine artık image class'ı
    [classes.imageVertical]: vertical,
  });
  return (
    <div className={classes.infoArea}>
      <div className={imageWrapper}>
        <img src={image} alt="info" className={imageClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea2.defaultProps = {
  imageColor: "gray",
};

InfoArea2.propTypes = {
  image: PropTypes.string.isRequired, // image yolu (URL veya import)
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.string.isRequired,
  imageColor: PropTypes.oneOf([
    "gray",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
  ]),
  vertical: PropTypes.bool,
};
