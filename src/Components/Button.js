import React from 'react';
import Button from '@material-ui/core/Button';

export default function Button({label}) {

  return (
    <Button variant="contained" size="large">
      {label}
    </Button>
  );
}