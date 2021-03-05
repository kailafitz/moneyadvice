import React from 'react';
import { NavLink } from 'react-router-dom'

// Package imports
import {
    usePopupState,
    bindHover,
    bindPopover,
} from 'material-ui-popup-state/hooks'

// styled-components imports
import styled from 'styled-components';
import fonts from '../fonts';
import colors from '../colors';

// MaterialUI
import Popover from 'material-ui-popup-state/HoverPopover'

// Component imports
import LoginModal from './LoginModal';

// styled-components
const LinksDiv = styled.div `
    display: flex;
    padding-right: 1em;

    .is-active {
        border-bottom: 2px solid ${colors.logo_blue};
    }

    .f-AppBarLinks {
        color: ${colors.logo_blue};
        font-family: ${fonts.roboto};
        text-decoration: none;
        font-weight: bold;
        font-size: 100%;
        padding: .5em;
        cursor: pointer;
        margin: .8em;
        border-top: 2px solid transparent;
        transition: all 350ms ease-in-out;

        &:hover {
            border-bottom: 2px solid ${colors.logo_blue};
            outline: none;
        }
    }
`
const PopoverDiv = styled(Popover) `
    display: block;

    .is-active {
        border-bottom: 2px solid ${colors.logo_blue};
    }

    .f-DropdownLinks {
        display: block;
        cursor: pointer;
        color: ${colors.logo_blue};
        font-family: ${fonts.roboto};
        text-decoration: none;
        font-weight: bold;
        font-size: 100%;
        padding: .5em;
        margin: .8em;
        border-bottom: 2px solid transparent;
        transition: all 200ms ease-in-out;

        &:hover {
            border-bottom: 2px solid ${colors.logo_blue};
        }
    }

`

function NavbarLinks() {
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoPopover',
    })
    
  return (
      <>
        <LinksDiv>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/" exact>
                Home
            </NavLink>
            <p
                {...bindHover(popupState)}
                className="f-AppBarLinks"
                activeclassname="is-active"
            >
                Features
            </p>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/about" exact>
                About
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/contactus" exact>
                Contact Us
            </NavLink>
            <LoginModal />
        </LinksDiv>

        <PopoverDiv
            {...bindPopover(popupState)}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
            disableRestoreFocus
        >
            <NavLink className="f-DropdownLinks" activeClassName="is-active" to="/productcomparison" exact>
                Product Comparison
            </NavLink>
            <NavLink className="f-DropdownLinks" activeClassName="is-active" to="/productfeatures" exact>
                Product Features
            </NavLink>
            <NavLink className="f-DropdownLinks" activeClassName="is-active" to="/additionalservices" exact>
                Additional Services
            </NavLink>
        </PopoverDiv>
        </>
    )
}

export default NavbarLinks();