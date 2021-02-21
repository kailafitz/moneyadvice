import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {colors} from '../colors';
import {fonts} from '../fonts';

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
  font-size: 1.3em;
  transition: .8s ease background-color, .8s ease color, .8s ease transform;

  &:hover {
    cursor: pointer;
    color: ${colors.logo_blue};
    transform: scale(1.03);
  }
`

export default function ContactUsButton({label}) {
  return (
    <StyledContactUsButton href="/contactus">
      {label}
    </StyledContactUsButton>
  );
}