import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {colors} from '../colors'
import {fonts} from '../fonts'

const StyledTitle = styled.div `
    width: 70%;
    max-width: 90%;
    margin: 0 auto;
    text-align: center;

    h1 {
        font-family: ${fonts.temp_font};
        color: ${colors.grey_dark};
        margin: 0;
        padding-top: 1em;
        font-weight: 800;
        color: ${colors.logo_purple};
        line-height: 1.2em;
        letter-spacing: -.035em;
    }

    @media only screen and ${breakpoint.device.xs} {
        margin-bottom: 2em;
    }

    @media only screen and ${breakpoint.device.lg} {
        margin-bottom: 4em;

        h1 {
            font-size: 3em;
        }
    }
`

export default function SectionTitle({title}) {
    return (
        <StyledTitle>
            <h1>{title}</h1>
        </StyledTitle>
    )
}