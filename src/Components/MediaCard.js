import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LottieAnimation from './LottieAnimation';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    "&:hover": {
      backgroundColor: "#068095"
    },
  },
  media: {
    // height: 140,
    width: "80%",
    margin: "0 auto",
    "&:hover": {
      "background-color": "#068095"
    },
  },
});

export default function MediaCard( { animationData, title } ) {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

  return (
    <Card className={classes.root} className="f-Card">
        <CardMedia
          className={classes.media}
        >
          <LottieAnimation animationData={animationData}/>
          {/* <Lottie className="f-Lottie" options={defaultOptions}/> */}
        </CardMedia>
      <CardContent>
        <h2 className="f-Title f-TextCenter">{title}</h2>
      </CardContent>
    </Card>
  );
}