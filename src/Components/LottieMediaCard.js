import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LottieAnimation from './LottieAnimation';
import {colors} from '../colors'
import {fonts} from '../fonts'

const StyledLottieCard = styled(Card) `
  width: 20%;

  h3 {
    font-size: 1.5em;
    font-family: ${fonts.temp_font};
    font-weight: 600;
    color: ${colors.wh};
  }
`

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    "&:hover": {
      backgroundColor: "#068095"
    },
    backgroundColor: "#068095",
    border: "none",
    transition: "none",
    boxShadow: "none",
  },
  media: {
    width: "80%",
    margin: "0 auto",
    "&:hover": {
      "background-color": "#068095"
    },
  },
});

export default function LottieMediaCard( { animationData, title } ) {
  const classes = useStyles();

  return (
    <StyledLottieCard className={classes.root}>
        <CardMedia
          className={classes.media}
          id="f-CardMediaMobile"
        >
          <LottieAnimation animationData={animationData}/>
        </CardMedia>
      <CardContent>
        <h3 className="f-h3 f-TextCenter">{title}</h3>
      </CardContent>
    </StyledLottieCard>
  );
}