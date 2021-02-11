import React from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#ffffff",
    // backgroundColor: theme.palette.background.paper,
    width: "100%",
    margin: "auto",
  },
  indicator: {
    backgroundColor: "#ffffff",
  },
  selected: {
    backgroundColor: "#068095",
    color: "#ffffff"
  },
  custom: {
    backgroundColor: "#068095"
  },
}
));

const formStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      "& .MuiFilledInput-root": {
        background: "#ffffff"
      }
    },
    "& .Mui-focused": {
      color: "#7d7d7d",
    },
  },
  floatingLabelFocusStyle: {
    color: "#7d7d7d",
  },
  focused: {
    color: "#7d7d7d",
  }
}));

export default function DataCaptureLogin() {
  const classes = useStyles();
  const classesForms = formStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#ffffff" elevation={0}>
        <Tabs
          elevation={0}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{ className: classes.indicator }}
          textColor="#ffffff"
        >
          <Tab label="Advisor Login" 
          classes={{ selected: classes.selected }} {...a11yProps(0)} />
          <Tab label="Client Login" classes={{ selected: classes.selected }} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction} className={classes.custom}>
          <form className={classesForms.root} noValidate autoComplete="off">
            <TextField id="filled-basic" label="Advisor Email" variant="filled" InputProps={{ className: classesForms.input, }} InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}/>
            <TextField id="filled-basic" label="Password" variant="filled" InputProps={{ className: classesForms.input, }} InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}/>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} className={classes.custom}>
          <form className={classesForms.root} noValidate autoComplete="off">
            <TextField id="filled-basic" label="Client Email" variant="filled" InputProps={{ className: classesForms.input, }} InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}/>
            <TextField id="filled-basic" label="Password" variant="filled" InputProps={{ className: classesForms.input, }} InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}/>
          </form>
        </TabPanel>
    </div>
  );
}