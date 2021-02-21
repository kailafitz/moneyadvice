import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DownloadableLink from './DownloadableLink';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {fonts} from '../fonts';
import {colors} from '../colors';

const h4 = styled.h4`
  font-size: 1.2em;
  font-family: ${fonts.roboto};
  font-weight: 300;
  color: ${colors.wh},
  text-align: "left",
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
  f_CardText: {
    color: "#ffffff",
    textAlign: "left",
    fontFamily: "Roboto",
  },
});

export default function DownloadMediaCard( { src, title } ) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        {/* <CardMedia
          className={classes.media}
        >

        </CardMedia> */}
      <CardContent className={classes.content}>
        <h4 className={classes.f_CardText + " f-h4"}>{title}</h4>
        <DownloadableLink src={src}/>
      </CardContent>
    </Card>
  );
}