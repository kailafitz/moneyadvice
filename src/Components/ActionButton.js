import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className="f-h3" id="f-ActionButton" href="/contactus" variant="contained">
        Call us today for your demo and a quotation!
      </Button>
    </div>
  );
}