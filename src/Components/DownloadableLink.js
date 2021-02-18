import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: "#068095",
      color: "#ffffff",
      transition: ".3s ease-in background-color, .2s ease-in color",
      "&:hover": {
          backgroundColor: "#b8d30c",
          color: "#7d7d7d",
      },
    }
}));

export default function DownloadableLink({src}) {
    const classes = useStyles();
    return (
        <Button href={src} className={classes.button} download>Download</Button>
    )
}