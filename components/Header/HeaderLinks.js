/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Widgets } from "@material-ui/icons";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
            <ListItem className={classes.listItem}>
        <Link href="/Anasayfa ">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <Icon className={classes.icons}>home</Icon> ANASAYFA
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/Hakkimizda">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <Icon className={classes.icons}>info</Icon> HAKKIMIZDA
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="HİZMETLERİMİZ"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Widgets}
          dropdownList={[
            <Link href="/Hizmetlerimiz/MutfakTezgahi">
              <a className={classes.dropdownLink}>Mutfak Tezgahı</a>
            </Link>,
            <Link href="/Hizmetlerimiz/Kabir">
              <a className={classes.dropdownLink}>Kabir</a>
            </Link>,
            <Link href="/Hizmetlerimiz/EvyeAnkastre">
              <a className={classes.dropdownLink}>Evye & Ankastre</a>
            </Link>,
            <Link href="/Hizmetlerimiz/Basamak">
              <a className={classes.dropdownLink}>Basamak</a>
            </Link>,
            <Link href="/Hizmetlerimiz/Denizlik">
              <a className={classes.dropdownLink}>Denizlik</a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/Galeri">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <Icon className={classes.icons}>photo_library</Icon> GALERİ
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/Iletisim">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            <Icon className={classes.icons}>chat</Icon> İLETİŞİM
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
