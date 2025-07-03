import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title,
} from "/styles/jss/nextjs-material-kit.js";

const infoStyle2 = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px",
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px",
  },
  primary: {
    color: primaryColor,
  },
  warning: {
    color: warningColor,
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: "#800020",
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden",
  },
  title,
  description: {
    color: "#3C4858",
    overflow: "hidden",
    marginTop: "0px",
    marginBottom: "96px",
    fontSize: "14px",
  },
  imageWrapper: {
    height: "125px", // büyüklüğü ayarlayabilirsin
    width: "250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    borderRadius: "12px", // istersen
    backgroundColor: "#none", // imageColor ile override edilebilir
    borderRadius: "2%", // 🔵 TAM yuvarlak görünüm için
    overflow: "hidden", // Görselin sınırlarını dışarı taşırmaması için
  },

  imageWrapperVertical: {
    marginBottom: "0px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // resmin orantılı görünmesini sağlar
  },
};

export default infoStyle2;
