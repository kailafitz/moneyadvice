import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DataCaptureLogin from './DataCaptureLogin';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    shadows: "0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleLoginAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion
        elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <h4 className="f-h4">Data Capture Login</h4>
          {/* <Typography className={classes.heading} className="f-h2">Data Capture Login</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
            <DataCaptureLogin />
        </AccordionDetails>
      </Accordion>
      <Accordion
        elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <h4 className="f-h4">Money Advice CRM Login</h4>
          {/* <Typography className={classes.heading}>Money Advice CRM Login</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
