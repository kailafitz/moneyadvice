import React from 'react';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {fonts} from '../fonts';
import {colors} from '../colors';

// MaterialUI
import { Avatar } from '@material-ui/core';

// styled-components
const StyledAvatar = styled(Avatar) `
  margin: 1.5em auto;
  width: 100%;
  height: auto;
  overflow: auto;
  border-radius: 0%;
  filter: grayscale(100%);

  img {
    width: auto;
    height: auto;
    border-radius: 7px;
    object-fit: contain;
  }

`
const Styledh4 = styled.h4 `
    font-family: ${fonts.temp_font};
    font-weight: 300;
    color: ${colors.logo_blue};
    text-align: center;

    a {
      text-decoration: none;
    }

    @media only screen and ${breakpoint.device.xs} {
      font-size: 1.1;
    }

    @media only screen and ${breakpoint.device.xs} {
      font-size: 1.15;
    }

    @media only screen and ${breakpoint.device.xs} {
      font-size: 1.2em;
    }

`
const Styledp = styled.p `
    font-family: ${fonts.temp_font};
    color: ${colors.bl};

    a {
        text-decoration : none;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.1em;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1em;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: .95em;
    }
`
const StyledCard = styled.div ` 
  margin: .5em;
  borderRadius: 4px;
  display: block;

  @media only screen and ${breakpoint.device.xs} {
    width: 40%;
  }

  @media only screen and ${breakpoint.device.sm} {
    width: 20vw;
  }
`

export default function EmployeeProfileCard( props ) {
  return (
    <StyledCard key={props.id}>
        <StyledAvatar
        alt="Profile Image"
        src={props.img}
        />
        <Styledh4>{props.empName}</Styledh4>
        <Styledp>{props.role}</Styledp>
    </StyledCard>
  );
}