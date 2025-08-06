import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import dynamic from 'next/dynamic';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

// Dynamically import the MarbleAISuggestion component
const MarbleAISuggestion = dynamic(
  () => import('./MarbleAISuggestion/MarbleAISuggestion'),
  { ssr: false }
);

if (typeof window !== 'undefined' && !document.getElementById('ai-pulse-keyframes')) {
  const style = document.createElement('style');
  style.id = 'ai-pulse-keyframes';
  style.innerHTML = `
    @keyframes ai-pulse {
      0% { box-shadow: 0 0 0 0 rgba(139,0,32,0.7); }
      70% { box-shadow: 0 0 0 10px rgba(139,0,32,0); }
      100% { box-shadow: 0 0 0 0 rgba(139,0,32,0); }
    }
  `;
  document.head.appendChild(style);
}

const useStyles = makeStyles((theme) => ({
  aiButton: {
    position: 'fixed',
    bottom: theme.spacing(10),
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
  dialog: {
    '& .MuiDialog-paper': {
      maxWidth: '600px',
      width: '95%',
      maxHeight: '85vh',
      margin: 0,
      borderRadius: '12px',
      border:"none",
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      overflow: 'hidden',
    },
  },
  dialogContent: {
    padding: 0,
    '& > div': {
      padding: 0,
    },
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  pulse: {
    animation: 'ai-pulse 2s infinite',

  },
}));

const AIFloatingButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button 
        aria-label="AI"
        className={`${classes.aiButton} ${classes.pulse}`}
        onClick={handleClickOpen}
      >
        <PhotoCameraIcon style={{ fontSize: 30 }} />
      </button>

      <Dialog 
        open={open} 
        onClose={handleClose} 
        className={classes.dialog}
        maxWidth={false}
        scroll="paper"
      >
        <div className={classes.dialogContent} style={{maxHeight: '80vh', overflowY: 'auto'}}>
          <MarbleAISuggestion onClose={handleClose} />
        </div>
      </Dialog>
    </>
  );
};

export default AIFloatingButton;
