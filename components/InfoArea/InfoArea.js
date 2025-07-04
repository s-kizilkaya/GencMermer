import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// CSS stillerini içe aktar
import styles from "/styles/jss/nextjs-material-kit/components/infoStyle.js";

// CSS stillerini uygulayın
const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const { title, description, iconColor, vertical, icon } = props; // icon props'u destructuring

  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  });

  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  });

  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        {React.cloneElement(icon, { className: iconClasses })}{" "}
        {/* Tabler icon */}
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "primary",
};

InfoArea.propTypes = {
  icon: PropTypes.element.isRequired, // icon prop'unu element olarak değiştirin
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "gray",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
  ]),
  vertical: PropTypes.bool,
};
