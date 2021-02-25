import React from 'react';
import { Link } from 'react-router-dom'

// MaterialUI
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
    },
    link: {
        color: "#ffffff",
        textDecoration: "none",
    }
}));

export default function DownloadableLink({src, doc}) {
    const classes = useStyles();
    return (
        <Button className={classes.button}>
            <Link
                to={src}
                className={classes.link}
                // href={src}
                target="_blank"
                download={doc}
            >
                Download
            </Link>
        </Button>
    )
}