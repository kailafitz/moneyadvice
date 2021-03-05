import React from 'react';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import colors from '../colors';
import fonts from '../fonts';

// MaterialUI
import Button from '@material-ui/core/Button';

// styled-components
const StyledContactUsButton = styled(Button)`
  background-color: ${colors.grey_light};
  font-family: ${fonts.temp_font};
  text-decoration: none;
  padding: 1em;
  justify-content: center;
  outline: 0;
  border: none;
  text-align: center;
  border-radius: 4px;
  color: ${colors.logo_purple};
  font-weight: 800;
  transition: .8s ease background-color, .8s ease color, .8s ease transform;

  &:hover {
    cursor: pointer;
    background-color: ${colors.trans_wh};
    color: ${colors.logo_blue};
    transform: scale(1.06);
  }

  @media only screen and ${breakpoint.device.xs} {
    font-size: 1em;
  }

  @media only screen and ${breakpoint.device.sm} {
    font-size: 1.1em;
  }

  @media only screen and ${breakpoint.device.lg} {
    font-size: 1.2em;
  }
`

export function ContactUsButton({label}) {
  return (
    <StyledContactUsButton
      href="/contactus"
      disableRipple={true}
    >
      {label}
    </StyledContactUsButton>
  );
}

export default ContactUsButton();