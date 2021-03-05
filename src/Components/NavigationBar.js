import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Package imports
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';

// styled-components imports
import breakpoint from '../breakpoints';
import styled from 'styled-components';
import fonts from '../fonts';
import colors from '../colors';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/KeyboardArrowDown';
import ChevronRightIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Component imports
import NavbarLinks from './NavbarLinks';
import LoginModal from './LoginModal';

// Media imports
import Logo from '../Images/Company-Logos/Logo-Sm.png';

// styled-components
const MobileNavLink = styled(NavLink) `
  margin: 0;
  padding: .5em;
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  font-family: ${fonts.roboto};
  color: ${colors.wh};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`
const MobileLinkp = styled.p `
  margin: 0;
  padding: .5em;
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  font-family: ${fonts.roboto};
  color: ${colors.wh};
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`
const MobileMenu = styled(Menu) `

  .MuiMenu-paper {
    width: 100%;
  }
`
const MobileDropdownItem = styled(MenuItem) `
  a {
    font-size: 1rem;
    font-family: ${fonts.roboto};
    color: ${colors.logo_blue};
    text-decoration: none;
    display: block;
    margin: 0 auto;
  }

  &:hover {
    background: ${colors.logo_blue};
  }

  &:hover a {
    color: ${colors.wh};
  }
`
const StyledAppBar = styled(AppBar) `
  width: 100%;
  background-color: ${colors.wh};
  display: flex;
  align-items: center;

  #f-NavbarLogo {

    img {
      width: 100%;
      height: auto;
    }
  }

  @media only screen and ${breakpoint.device.xs} {
    #f-NavbarLogo {
      width: 75%;
      max-width: 325px;
    }
  }

  @media only screen and ${breakpoint.device.sm} {
    #f-NavbarLogo {
      width: 45%;
    }
  }

  @media only screen and ${breakpoint.device.lg} {
    #f-NavbarLogo {
      width: 25%;
      max-width: 500px;
    }
  }
`

// MaterialUI makeStyles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    "& .MuiList-padding": {
      padding: "0",
    }
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#068095",
    borderRadius: "4px",
    padding:  "5px",
    "&:hover": {
      backgroundColor: "#067f95b6",
    },
  },
  closeMenuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    padding:  "5px",
    "&:hover": {
      backgroundColor: "#b8d30c",
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100%",
    paddingTop: ".5em",
    backgroundColor: "#068095",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  toolbar: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignContent: "center",
    display: "flex",
    padding: "0",
  },
}));

// framer motion
const myVariants = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0, 
    opacity: 1,
    transition: {
      duration: 1.2,
      type: 'spring',
      stiffness: 500
    }
  }
}

const drawerWidth = "100%";

function NavigationBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ maxWidth: breakpoint.size.sm });
  const [isOpen, setOpen] = useState(false);
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    popupState.close();
  };

  return (
    <motion.div
      className={classes.root}
      variants={myVariants}
      initial='hidden'
      animate='visible'
    >
      <StyledAppBar position="sticky" id="back-to-top-anchor" elevation={0}>
          <Toolbar className={classes.toolbar}>
              <a
                id="f-NavbarLogo"
                href="/"
              >
              <img
                alt="Logo"
                src={Logo}
              /></a>
              {!isMobile && <NavbarLinks />}
              {isMobile &&  
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, isOpen && classes.hide)}
                >
                  <ChevronLeftIcon />
                </IconButton>
              }
          </Toolbar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor='top'
            open={isOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose} className={classes.closeMenuButton}>
              <ChevronRightIcon />
            </IconButton>
          </div>
            <MobileNavLink to="/" exact onClick={handleDrawerClose}>
              Home
            </MobileNavLink>
            <MobileLinkp {...bindTrigger(popupState)}>
              Features
            </MobileLinkp>
            <MobileNavLink to="/about" exact onClick={handleDrawerClose}>
              About
            </MobileNavLink>
            <MobileNavLink to="/contactus" exact onClick={handleDrawerClose}>
              Contact Us
            </MobileNavLink>
            <MobileMenu
              className={classes.root}
              {...bindMenu(popupState)}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <MobileDropdownItem 
                disableRipple
              >
                <NavLink
                  to="/productcomparison"
                  exact
                  onClick={handleDrawerClose}
                >
                  Product Comparison
                </NavLink>                
              </MobileDropdownItem>
              <MobileDropdownItem
                disableRipple
              >
                <NavLink
                  to="/productfeatures"
                  exact
                  onClick={handleDrawerClose}
                >
                  Product Features
                </NavLink>
              </MobileDropdownItem>
              <MobileDropdownItem
                disableRipple
              >
                <NavLink
                  to="/additionalservices"
                  exact
                  onClick={handleDrawerClose}
                >
                  Additional Services
                  </NavLink>
              </MobileDropdownItem>
            </MobileMenu>
            <LoginModal />
        </Drawer>
      </StyledAppBar>
    </motion.div>
  );
}

export default NavigationBar();