import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom'
import Logo from '../Images/Logo-Sm.png'
import SimpleModal from './SimpleModal';
import { DeviceSize } from './ScreenWidths';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from './MobileMenu';
import NavbarLinks from './NavbarLinks';

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
  toolbar: {
    "justify-content": "space-between",
    "align-content": "center",
    "align-items": "center"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <div className={classes.root} >
      <AppBar position="sticky" elevation={24} id="f-AppBar">
          <Toolbar className={classes.toolbar} id="f-Toolbar">
                <div id="f-NavBarLogo">
                  <img alt="Logo" src={Logo}/>
                </div>
                {!isMobile && <NavbarLinks />}
                {isMobile && <MobileMenu />}
            </Toolbar>
      </AppBar>
    </div>
  );
}
