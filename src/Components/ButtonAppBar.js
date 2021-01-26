import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import Logo from '../Images/Logo-Sm.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" id="f-AppBar">    
          <img alt="Logo" src={Logo} id="f-NavBarLogo"/>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Toolbar>
          <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/">
              Home
          </NavLink>
          <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/features">
              Features
          </NavLink>
          <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/about">
              About
          </NavLink>
          <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/contactus">
              Contact Us
          </NavLink>
          <Button color="inherit" id="f-LoginBtn">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
