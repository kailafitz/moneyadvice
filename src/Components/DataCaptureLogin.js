import React from 'react';

// styled-components imports
import styled from 'styled-components';
import colors from '../colors';
import fonts from '../fonts';
import breakpoint from '../breakpoints';

// MaterialUI
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

// styled-components
const StyledButton = styled(Button) `
  font-family: ${fonts.roboto};
  text-transform: uppercase;
  background-color: ${colors.logo_blue};
  color: ${colors.wh};
  margin: .8em;
  border: 1px solid ${colors.wh};
  transition: .3s ease-in background-color, .3s ease-in color;

  &:hover {
    background-color: ${colors.logo_green};
    border: 1px solid ${colors.logo_green};
    color: ${colors.wh};
  }

  @media only screen and ${breakpoint.device.xs} {
    font-size: 1.1em;
  }

  @media only screen and ${breakpoint.device.sm} {
    font-size: 1em;
  }

  @media only screen and ${breakpoint.device.lg} {
    font-size: .95em;
  }
`
const StyledTextField = styled(TextField) `
  
  @media only screen and ${breakpoint.device.xs} {
    width: 100%;
    margin: 8px auto;

    .MuiInputBase-root {
        input {
          font-size: 1.1em;
        }
    }

    .MuiFormLabel-root {
      font-size: 1.3em;
    }
  }
  
  @media only screen and ${breakpoint.device.sm} {
    .MuiInputBase-root {
        input {
          font-size: 1em;
        }
    }

    .MuiFormLabel-root {
        font-size: 0.8em;
    }
  }       
`

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

function DataCaptureLogin() {
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
            disableRipple
          />
          <Tab
            label="Client Login" 
            classes={{ selected: classes.selected }}
            {...a11yProps(1)}
            disableRipple
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
            <StyledTextField
              id="filled-basic"
              label="Username"
              variant="filled"
              type="email"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <StyledTextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <StyledTextField
              id="filled-basic"
              label="Pin"
              variant="filled"
              type="password"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
              <StyledButton type="button">Login</StyledButton>
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
            <StyledTextField
              id="filled-basic"
              label="Forename"
              variant="filled"
              type="text"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <StyledTextField
              id="filled-basic"
              label="Surname"
              variant="filled"
              type="text"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <StyledTextField
              id="filled-basic"
              label="Email"
              variant="filled"
              type="email"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <StyledTextField
              id="filled-basic"
              label="Security Code"
              variant="filled"
              type="password"
              required={true}
              InputLabelProps={{ className: classesForms.floatingLabelFocusStyle, }}
            />
            <StyledButton type="button">Login</StyledButton>
          </form>
        </TabPanel>
    </div>
  );
}

export default DataCaptureLogin();