import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  tabPanel: {
    backgroundColor: "#068095"
  },
}
));

const formStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
      "& .MuiFilledInput-root": {
        background: "#ffffff"
      },
      '& .MuiFilledInput-underline:after': { 
        borderBottomColor: "#b8d30c",
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: "#7d7d7d",
      }
    },
  },
  floatingLabelFocusStyle: {
    color: "#7d7d7d",
  },
}));

export default function DataCaptureLogin() {
  const classes = useStyles();
  const classesForms = formStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="#ffffff" elevation={0}>
        <Tabs
          elevation={0}
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{className: classes.indicator}}
          textColor="#ffffff"
        >
          <Tab
            label="Advisor Login"
            classes={{ selected: classes.selected }}
            {...a11yProps(0)}
          />
          <Tab
            label="Client Login" 
            classes={{ selected: classes.selected }}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
        <TabPanel
          value={value}
          index={0}
          dir={theme.direction}
          className={classes.tabPanel}>
          <form
            className={classesForms.root} 
            autoComplete="off"
            action="/"
            method="post"
          >
            <TextField
              id="filled-basic"
              label="Advisor Email"
              variant="filled"
              type="email"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
              <Button type="button" className={classes.button}>Login</Button>
          </form>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          dir={theme.direction}
          className={classes.tabPanel}
        >
          <form
            className={classesForms.root}
            autoComplete="off"
            action="/"
            method="post"
          > 
            <TextField
              id="filled-basic"
              label="Client Email"
              variant="filled"
              type="email"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <Button type="button" className="f-Button">Login</Button>
          </form>
        </TabPanel>
    </div>
  );
}