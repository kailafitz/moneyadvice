import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../Images/Logo-Sm.png'
import { DeviceSize } from './ScreenWidths';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from './MobileMenu';
import NavbarLinks from './NavbarLinks';
import { HideOnScroll } from "./HideOnScroll"

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
    alignItems: "center",
    width: "100%",
    alignContent: "center",
    display: "flex",
    // "& img": {
    //   width: "45%",
    // },
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <HideOnScroll>
      <div className={classes.root} >
          <AppBar position="sticky" elevation={24} id="f-NavigationBar">
              <Toolbar className={classes.toolbar}>
                  <img id="f-NavbarLogo" alt="Logo" src={Logo}/>
                  {!isMobile && <NavbarLinks />}
                  {isMobile && <MobileMenu />}
              </Toolbar>
          </AppBar>
      </div>
    </HideOnScroll>
  );
}
