import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

if (typeof window !== 'undefined' && !document.getElementById('wp-pulse-keyframes')) {
  const style = document.createElement('style');
  style.id = 'wp-pulse-keyframes';
  style.innerHTML = `
    @keyframes wp-pulse {
      0% { box-shadow: 0 0 0 0 rgba(139,0,32,0.7); }
      70% { box-shadow: 0 0 0 10px rgba(139,0,32,0); }
      100% { box-shadow: 0 0 0 0 rgba(139,0,32,0); }
    }
  `;
  document.head.appendChild(style);
}

const useStyles = makeStyles((theme) => ({
  wpButton: {
    position: 'fixed',
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1100,
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#8b0020',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#6b0019',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  pulse: {
    animation: 'wp-pulse 2s infinite',

  },
}));

export default function WhatsAppButton({ phoneNumber }) {
  const classes = useStyles();
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <button 
        aria-label="WhatsApp"
        onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
        className={`${classes.wpButton} ${classes.pulse}`}
      >
        <WhatsAppIcon style={{ fontSize: 30 }} />
      </button>
  );
}
