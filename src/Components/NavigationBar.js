import React from 'react';

// Package imports
import { useMediaQuery } from 'react-responsive';

// styled-components imports
import breakpoint from '../breakpoints';
import styled from 'styled-components';
import {colors} from '../colors';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Component imports
import MobileMenu from './MobileMenu';
import NavbarLinks from './NavbarLinks';
import { HideOnScroll } from "./HideOnScroll";

// Media imports
import Logo from '../Images/Company-Logos/Logo-Sm.png';

const StyledAppBar = styled(AppBar) `
  width: 100%;
  background-color: ${colors.wh};
  display: flex;
  align-items: center;

  @media only screen and ${breakpoint.device.xs} {
    #f-NavbarLogo {
      width: 45%;
    }
  }

  @media only screen and ${breakpoint.device.sm} {
    #f-NavbarLogo {
      width: 25%;
    }
  }
`

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
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignContent: "center",
    display: "flex",
    padding: "0",
  },
}));

export default function NavigationBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ maxWidth: breakpoint.size.sm });

  return (
    <HideOnScroll>
      <div className={classes.root} >
          <StyledAppBar position="sticky">
              <Toolbar className={classes.toolbar}>
                  <img id="f-NavbarLogo" alt="Logo" src={Logo}/>
                  {!isMobile && <NavbarLinks />}
                  {isMobile && <MobileMenu />}
              </Toolbar>
          </StyledAppBar>
      </div>
    </HideOnScroll>
  );
}
