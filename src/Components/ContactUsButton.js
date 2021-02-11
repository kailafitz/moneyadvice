import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function ContactUsButton({label}) {

  return (
    <Button id="f-ContactUsButton" variant="contained" size="large" href="/contactus">
      {label}
    </Button>
  );
}