import React from 'react';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {colors} from '../colors'
import {fonts} from '../fonts'

const Styledh1 = styled.h1 `
    font-family: ${fonts.temp_font};
    font-weight: 800;
    color: ${colors.logo_purple};
    line-height: 1.2em;
    letter-spacing: -.035em;

    @media only screen and ${breakpoint.device.xs} {
        font-size: 2em;
    }
    
    @media only screen and ${breakpoint.device.sm} {
        font-size: 2.5em;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 3em;
    }
`

const StyledTitle = styled.div `
    margin: 0 auto;
    text-align: center;

    @media only screen and ${breakpoint.device.xs} {
        width: 90%;
    }
    
    @media only screen and ${breakpoint.device.sm} {
        width: 70%;
    }

    @media only screen and ${breakpoint.device.lg} {
    }
`

export default function SectionTitle(props) {
    return (
        <StyledTitle>
            <Styledh1 style={{"color": props.color}}>{props.title}</Styledh1>
        </StyledTitle>
    )
}