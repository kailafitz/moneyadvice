import React from 'react';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import colors from '../colors'
import fonts from '../fonts'

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// Component imports
import LottieAnimation from './LottieAnimation';

// styled-components
const Styledh3 = styled.h3 `
  font-family: ${fonts.temp_font};
  font-weight: 600;
  text-align: center;
  color: ${colors.wh};

  a {
    text-decoration: none;
  }

  @media only screen and ${breakpoint.device.xs} {
    font-size: 1.1em;
  }

  @media only screen and ${breakpoint.device.sm} {
    font-size: 1.2em;
  }

  @media only screen and ${breakpoint.device.lg} {
    font-size: 1.3vw;
  }
`
const Styledp = styled.p `
  font-family: ${fonts.temp_font};
  color: ${colors.wh};
  text-align: center;

  a {
      text-decoration : none;
  }

  @media only screen and ${breakpoint.device.xs} {
      font-size: 1.1em;
  }

  @media only screen and ${breakpoint.device.sm} {
      font-size: 1em;
  }

  @media only screen and ${breakpoint.device.lg} {
      font-size: .95em;
  }
`
const StyledButton = styled(Button) `
  font-family: ${fonts.roboto};
  text-transform: uppercase;
  background-color: ${colors.logo_blue};
  color: ${colors.wh};
  margin: .8em;
  transition: .3s ease-in background-color, .3s ease-in color;

  &:hover {
    background-color: ${colors.logo_green};
    color: ${colors.wh};
  }

  @media only screen and ${breakpoint.device.xs} {
    font-size: 1.1em;
  }
  
  @media only screen and ${breakpoint.device.sm} {
    font-size: 1em;
  }
  
  @media only screen and ${breakpoint.device.lg} {
    font-size: .95em;
  }
`
const StyledLottieCard = styled(Card) `
  margin: 0 auto;
  background-color: transparent;
  text-align: center;

  @media only screen and ${breakpoint.device.xs} {
    width: 70%;
  }

  @media only screen and ${breakpoint.device.sm} {
    width: 25%;
  }

  @media only screen and ${breakpoint.device.lg} {
    width: 20%;
  }
`

// MateriaUI makeStyles
const useStyles = makeStyles({
  root: {
    border: "none",
    transition: "none",
    boxShadow: "none",
  },
  media: {
    width: "50%",
    paddingTop: "1em",
    margin: "0 auto",
  },
});

export default function LottieMediaCard(props) {
  const classes = useStyles();

  return (
    <StyledLottieCard className={classes.root}>
        <CardMedia
          className={classes.media}
        >
          <LottieAnimation animationData={props.animationData}/>
        </CardMedia>
      <CardContent>
        <Styledh3>{props.title}</Styledh3>
        <Styledp>{props.subTitle}</Styledp>
        <StyledButton href="/productfeatures"
      disableRipple={true}>Learn more</StyledButton>
      </CardContent>
    </StyledLottieCard>
  );
}