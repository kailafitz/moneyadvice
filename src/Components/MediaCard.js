import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Lottie from 'react-lottie';

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
    <Card className={classes.root} className="f-Card drop-shadow">
        <CardMedia
          className={classes.media}
          // className="f-CardMedia"
        ><Lottie className="f-Lottie" options={defaultOptions}/>
        </CardMedia>
      <CardContent>
        <h2 className="f-title">{title}</h2>
      </CardContent>
    </Card>
  );
}