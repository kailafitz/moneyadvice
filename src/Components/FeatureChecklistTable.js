import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FeatureChecklistData from '../JSON_Data/FeatureChecklistData.json'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DataGrid } from '@material-ui/data-grid';
import styled from "styled-components";
import breakpoint from '../breakpoints';

const DataGridDiv = styled.div`
  width: 100%;


  .table-header{
    background-color: red;
  }
  

  @media only screen and ${breakpoint.device.xs}{
    height: 400px;
  }   
  @media only screen and ${breakpoint.device.sm}{
    height: 700px;
  }
  @media only screen and ${breakpoint.device.lg}{
    height: 700px;
  }

`

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const columns = [

  { field: 'featureName', headerName: 'Name', flex: 3, headerClassName: 'table-header',},
  { field: 'featureOfMoney', headerName: 'Feature of Money', flex: 1, headerClassName: 'table-header',},
  { field: 'featureOfMoneyCRM', headerName: 'Feature of MoneyCRM', flex: 1, headerClassName: 'table-header',},
  {
    field: 'newRelease',
    headerName: 'New release',
    flex: 1,
    headerClassName: 'table-header',
  },
  {
    field: 'nextRelease',
    headerName: 'New Release',
    flex: 1,
    headerClassName: 'table-header',
  },
  {
    field: 'futureRelease',
    headerName: 'Future Release',
    flex: 1,
    headerClassName: 'table-header',
  }
];

const rows = [
  {
      id: 0,      
      featureName: "Client, Product Data Downloads from Life Insurance Providers",
      featureOfMoney: "Yes",
      featureOfMoneyCRM: "Yes",
      newRelease: "No",
      nextRelease: "No",
      futureRelease: "No"
  },
  {
      id: 1,
      featureName: "Tasks",
      featureOfMoney: "Yes",
      featureOfMoneyCRM: "Yes",
      newRelease: "No",
      nextRelease: "No",
      futureRelease: "No"
  },
  {
      id: 3,
      featureName: "Appointments / Diary (Add an appointment in Outlook from Money Advice)",
      featureOfMoney: "Yes",
      featureOfMoneyCRM: "Yes",
      newRelease: "No",
      nextRelease: "No",
      futureRelease: "No"
  }
];

export default function FeatureChecklistTable() {
  const [data, setData] = useState([]);
  const [validData, setValidData] = useState(false);
  const classes = useStyles();

  const createFunction = () => {
    setData(FeatureChecklistData);
  }

  const addTickOrCross = (element) => {
    

    for (let [key, value] of Object.entries(element)) {
      if(value == "Yes"){
        element[key] = <span class="material-icons">done</span>
      }else if(value == "No"){
        element[key] = <span class="material-icons">clear</span>
      }
    }
    console.log(element)
    return element
  }

  const createRows = (data) => {
    for(let [index, element] of data.entries()){
      element["id"] = index
      element = addTickOrCross(element)
    }
    console.log(data)
    return data
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
                  {/* {
                    createRows(Object.values(feature)[0])
                  } */}
                    <DataGridDiv>
                      <DataGrid rows={createRows(Object.values(feature)[0])} columns={columns} pagination />
                    </DataGridDiv>
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
