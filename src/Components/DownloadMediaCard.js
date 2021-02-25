import React from 'react';

// styled-components imports
import styled from 'styled-components';
import {fonts} from '../fonts';
import {colors} from '../colors';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Component imports
import DownloadableLink from './DownloadableLink';

const Styledh4 = styled.h4`
  font-size: 1.2em;
  font-family: ${fonts.roboto};
  font-weight: 300;
  color: ${colors.wh};
  text-align: "left";
`

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    width: "30vw",
    backgroundColor: "#7d7d7d",
    border: "none",
    transition: "none",
    boxShadow: "none",
    margin: "0 2em",
    borderRadius: "4px",
  },
  media: {
    width: "80%",
    margin: "0 auto",
    "&:hover": {
      "background-color": "#068095"
    },
  },
  content: {
    display: "block",
  },
  button: {
    backgroundColor: "#068095",
    color: "#ffffff",
    transition: ".3s ease-in background-color, .2s ease-in color",
    "&:hover": {
        backgroundColor: "#b8d30c",
        color: "#7d7d7d",
    },
  }
});

export default function DownloadMediaCard( { src, title, doc } ) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        {/* <CardMedia
          className={classes.media}
        >

        </CardMedia> */}
      <CardContent className={classes.content}>
        <Styledh4>{title}</Styledh4>
        <DownloadableLink src={src} doc={doc}/>
      </CardContent>
    </Card>
  );
}