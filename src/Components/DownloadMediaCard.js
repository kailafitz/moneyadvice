import React from 'react';
import { Link } from 'react-router-dom'

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import fonts from '../fonts';
import colors from '../colors';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// styled-components
const Styledh3 = styled.h3 `
  font-family: ${fonts.temp_font};
  color: ${colors.wh};
  font-weight: 300;
  text-align: left;

  a {
      text-decoration: none;
  }

  @media only screen and ${breakpoint.device.xs} {
      font-size: 1.1;
  }

  @media only screen and ${breakpoint.device.xs} {
      font-size: 1.15;
  }

  @media only screen and ${breakpoint.device.xs} {
      font-size: 1.2em;
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
    color: ${colors.grey_dark};
  }
`
const StyledCard = styled(Card) `
  @media only screen and ${breakpoint.device.xs} {
    width: 90vw;
  }

  @media only screen and ${breakpoint.device.sm} {
    width: 40vw;
  }

  @media only screen and ${breakpoint.device.lg} {
    width: 25vw;
  }
  
`

// MaterialUI makeStyles
const useStyles = makeStyles({
  root: {
    backgroundColor: "#7d7d7d",
    border: "none",
    transition: "none",
    boxShadow: "none",
    margin: "2em",
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
  link: {
    color: "#ffffff",
    textDecoration: "none",
  }
});

export function DownloadMediaCard(props) {
  const classes = useStyles();

  return (
    <StyledCard className={classes.root}>
        {/* <CardMedia
          className={classes.media}
        >

        </CardMedia> */}
      <CardContent className={classes.content}>
        <Styledh3>{props.title}</Styledh3>
        <StyledButton>
          <Link
            to={props.src}
            className={classes.link}
            target="_blank"
            download={props.doc}
          >
            Download
          </Link>
        </StyledButton>
      </CardContent>
    </StyledCard>
  );
}

export default DownloadMediaCard();