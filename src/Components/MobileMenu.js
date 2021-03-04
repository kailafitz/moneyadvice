import React, { useState } from 'react';

// Package imports
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

// styled-components imports
import styled from 'styled-components';
import {fonts} from '../fonts';
import {colors} from '../colors';

// MaterialUI
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

// Component imports
import { MenuToggle } from './MenuToggle';
import LoginModal from './LoginModal';

const MenuLinksa = styled.a `
  margin: 0;
  padding: .5em;
  cursor: pointer;
  text-align: left;
  font-size: 1.2rem;
  font-family: ${fonts.roboto};
  color: ${colors.wh};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.06);
  }
`

const MenuLinksp = styled(MenuLinksa) `

`

const StyledDropdownItem = styled(MenuItem) `
  a {
    font-size: 1rem;
    font-family: ${fonts.roboto};
    color: ${colors.logo_blue};
    text-decoration: none;
  }

  &:hover {
    background: ${colors.logo_blue};
  }

  &:hover a {
    color: ${colors.wh};
  }
`

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#068095",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    paddingRight: "20px",
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const MobileMenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isOpen, setOpen] = useState(false);
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    {/* <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, isOpen && classes.hide)}
      >
        <ChevronLeftIcon />
      </IconButton> */}
        {/* <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)}/> */}
    
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
          <MenuLinksa href="/">
            Home
          </MenuLinksa>
          <MenuLinksp {...bindTrigger(popupState)}>
            Features
          </MenuLinksp>
          <MenuLinksa href="/about">
            About
          </MenuLinksa>
          <MenuLinksa href="/contactus">
            Contact Us
          </MenuLinksa>
          <Menu
            className={classes.root}
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <StyledDropdownItem 
              onClick={popupState.close}
              className="f-MobileDropdownLink"
              disableRipple
            >
              <a href="/productcomparison">
                Product Comparison
              </a>
            </StyledDropdownItem>
            <StyledDropdownItem
              onClick={popupState.close}
              className="f-MobileDropdownLink"
              disableRipple
            >
              <a href="/productfeatures"
              >
                Product Features
              </a>
            </StyledDropdownItem>
            <StyledDropdownItem 
              onClick={popupState.close}
              className="f-MobileDropdownLink"
              disableRipple
            >
              <a href="/additionalservices">
                Additional Services
              </a>
            </StyledDropdownItem>
          </Menu>
          <LoginModal />
      </Drawer>
    {/* </div> */}
    </>
  )
}
export default MobileMenu;