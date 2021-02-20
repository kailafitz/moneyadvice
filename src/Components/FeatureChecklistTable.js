import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FeatureChecklistData from '../JSON_Data/FeatureChecklistData.json'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FeatureChecklistTable() {
  const [data, setData] = useState([]);
  const [validData, setValidData] = useState(false);
  const classes = useStyles();

  const createFunction = () => {
    setData(FeatureChecklistData);
  }

  useEffect(() => {
    if (data && data.length > 0) {
      setValidData(true);
    } else {
      createFunction();
    }
  }, [data]);

  return (
    <>
    {
      validData ?
      <div className={classes.root}>
      {
        data.map(feature => {
          return <>{
           
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{Object.keys(feature)[0]}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  {
                    Object.values(feature)[0].map(value => {
                      return <>
                        <h1>{value.featureName}</h1>
                      </>
                    })
                  }
                  </AccordionDetails>
                </Accordion>
          
            
            // feature.map((title, values) => {
            //   <Accordion>
            //     <AccordionSummary
            //       expandIcon={<ExpandMoreIcon />}
            //       aria-controls="panel1a-content"
            //       id="panel1a-header"
            //     >
            //       <Typography className={classes.heading}>{title}</Typography>
            //     </AccordionSummary>
            //     <AccordionDetails>
            //       <Typography>
            //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            //         sit amet blandit leo lobortis eget.
            //       </Typography>
            //     </AccordionDetails>
            //   </Accordion>
            // })
          } </>
        })
      }   
    </div> : <h2>No Data</h2>
    }
    </>
  );
}
