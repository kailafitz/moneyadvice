import React, { useState } from 'react';
import { MenuToggle } from './MenuToggle';
import LoginModal from './LoginModal';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components';
import {fonts} from '../fonts';
import {colors} from '../colors';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

const MobileMenuDiv = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 18px;

  #f-MobileLinksWrapper {
    margin: 0;
    padding: 0;
    display: flex;
    height: auto;
    list-style: none;
    background-color: ${colors.wh};
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 55px;
    left: 0;

    hr {
        width: 100%;
        color: ${colors.logo_trans_blue};
    }

    a, p {
        font-size: 1.2rem;
        font-family: ${fonts.roboto};
        color: ${colors.grey_dark};
        text-transform: uppercase;
        padding: 1rem 0;
        font-weight: bold;
        text-decoration: none;
        transition: color 0.3s linear;
        margin: 0 .8em;

        &:hover {
          cursor: pointer;
        }
    }
  }
`
const StyledMenuItem = styled(MenuItem) `
  a {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
    font-family: ${fonts.roboto};
    color: ${colors.grey_dark};
    text-decoration: none;
  }
`

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  return (
    <MobileMenuDiv>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <div id="f-MobileLinksWrapper">
          <a href="/home">
            Home
          </a>
          <hr />
          <p {...bindTrigger(popupState)}>
            Features
          </p>
          {/* <a href="/features">
            Features
          </a> */}
          <hr />
          <a href="/about">
            About
          </a>
          <hr />
          <a href="/contactus">
            Contact Us
          </a>
          <hr />
          <Menu
            {...bindMenu(popupState)}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            <StyledMenuItem 
              onClick={popupState.close}
              className="f-MobileDropdownLink"
              disableRipple
            >
              <a href="/productcomparison">
                Product Comparison
              </a>
            </StyledMenuItem>
            <StyledMenuItem
              onClick={popupState.close}
              className="f-MobileDropdownLink"
              disableRipple
            >
              <a href="/productfeatures"
              >
                Product Features
              </a>
            </StyledMenuItem>
          </Menu>
          <LoginModal />
        </div> 
      )}
    </MobileMenuDiv>
  )
}
export default MobileMenu;