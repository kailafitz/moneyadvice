import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Lottie from 'react-lottie';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    // height: 140,
    width: "80%",
    margin: "0 auto",

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
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Finance"
          // className="f-CardMedia"
        ><Lottie className="f-Lottie" options={defaultOptions}/>
        </CardMedia>
      </CardActionArea>
      <CardContent>
        <h2 className="f-title">{title}</h2>
      </CardContent>
    </Card>
  );
}