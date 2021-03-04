import React, { useState, useEffect } from 'react';

// Local JSON file
import FeatureChecklistData from '../JSON_Data/FeatureChecklistData.json'

// styled-components imports
import styled from "styled-components";
import breakpoint from '../breakpoints';
import {fonts} from '../fonts'
import { colors }  from '../colors';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DataGrid } from '@material-ui/data-grid';

const Styledh3 = styled.h3 `
  font-family: ${fonts.temp_font};
  font-weight: 300;
  color: ${colors.logo_blue};
  line-height: 20px;

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

const ContainerDiv = styled.div `
  height: 100%;
  width: 90%;
  margin: 0 auto;
`

const StyledAccordion = styled(Accordion)`

  @media only screen and ${breakpoint.device.xs} {
    overflow-x:scroll;
  }

  @media only screen and ${breakpoint.device.sm} {
    overflow-x: auto;
  }  
`

const DataGridDiv = styled.div `
  width: 100%;

  .MuiDataGrid-root .MuiDataGrid-columnsContainer{
    background-color: ${colors.logo_blue};
    width: 100%;
  }

  .table-header{
    width: 100%;
    color: ${colors.wh};
    background-color: ${colors.logo_blue};
  }

  div[data-value='✗'] {
    color: #ff0f0f;
  }

  div[data-value='✓'] {
    color:  #4BB543;
  }  

  @media only screen and ${breakpoint.device.xs} {
    height: 400px;
    min-width: 800px;
  }

  @media only screen and ${breakpoint.device.sm} {
    min-width: 0px;
  }
  
  @media only screen and ${breakpoint.device.lg} {
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

  { field: 'featureName', headerName: 'Name', flex: 2, headerClassName: 'table-header'},
  { field: 'featureOfMoney', headerName: 'MoneyAdvice', flex: 1, headerClassName: 'table-header'},
  { field: 'featureOfMoneyCRM', headerName: 'MoneAdvice+CRM', flex: 1, headerClassName: 'table-header'},
];


export default function ProductComparisonTables() {
  const [data, setData] = useState([]);
  const [validData, setValidData] = useState(false);
  const classes = useStyles();

  const createFunction = () => {
    setData(FeatureChecklistData);
  }

  const addTickOrCross = (data) => {
    for(let [key, value] of Object.entries(data)){
      console.log(value)
      if (value == "Yes") {
        console.log(value)
        data[key] = "✓"
      } else if (value == "No"){
        console.log(value)
        data[key] = "✗"
      }
    }
    return data
  }

  const createRows = (data) => {
    for(let [index, element] of data.entries()){
      element["id"] = index
      element = addTickOrCross(element)
    }
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
    <ContainerDiv>
    {
      validData ?
      <div className={classes.root}>
      {
        data.map(feature => {
          return <> {
            <StyledAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{Object.keys(feature)[0]}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <DataGridDiv>
                  <DataGrid
                    rows={createRows(Object.values(feature)[0])}
                    columns={columns}
                    hideFooterPagination={true}
                    hideFooterRowCount={true}
                    hideFooter={true}
                  />
                </DataGridDiv>
              </AccordionDetails>
            </StyledAccordion>
          } </>
        })
      }   
    </div> : <Styledh3>No Data</Styledh3>
    }
    </ContainerDiv>
  );
}
