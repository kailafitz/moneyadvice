import React from 'react';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import { useScrollTrigger } from "@material-ui/core"
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

// MaterialUI makeStyles
const buttonStyle = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    button: {
      borderRadius: "4px",
      backgroundColor: "#732c4e",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#b8d30c",
        color: "#f3f3f3",
      }
    }
}));

export const ScrollTopButton = () => {
  const trigger = useScrollTrigger();
  const classes = buttonStyle();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab className={classes.button} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    </Zoom>
  );
}