import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    backgroundColor: "#25D366", 
    color: "white",
    zIndex: 1100, 
    "&:hover": {
      backgroundColor: "#128C7E", 
    },
  },
}));

export default function WhatsAppButton({ phoneNumber }) {
  const classes = useStyles();
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Fab className={classes.fab}>
        <WhatsAppIcon />
      </Fab>
    </a>
  );
}
