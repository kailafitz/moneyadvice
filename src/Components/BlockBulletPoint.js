import React from 'react';
import styled from 'styled-components';
import {colors} from '../colors';
import {fonts} from '../fonts';
import breakpoint from '../breakpoints';

const StyledBlockBulletPointDiv = styled.div`
    display: block;
    background-color: ${colors.logo_blue};
    border-radius: 4px;
    text-align: center;

    i {
        color: ${colors.logo_green};
    }

    h1 {
        font-family: ${fonts.temp_font};
        font-weight: 300;
        color: ${colors.wh};
    }

    @media only screen and ${breakpoint.device.xs} {
        width: 38%;
        padding: .5em;
        margin: .5em;

        h1 {
            font-size: 1.1em;
        }

        i {
            font-size: 2.5em;
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 20%;
        padding: 1em;
        margin: 1em;

        h1 {
            font-size: 1em;
        }

        i {
            font-size: 2em;
        }
    }

    @media only screen and ${breakpoint.device.lg} {
    }
`

export const BlockBulletPoint = ({bulletPoint}) => {
    return (
        <StyledBlockBulletPointDiv>
            <i className="fas fa-check-square"></i>
            <h1>{bulletPoint}</h1>
        </StyledBlockBulletPointDiv>
    )
}