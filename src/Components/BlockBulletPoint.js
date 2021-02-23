import React from 'react';
import styled from 'styled-components';
import {colors} from '../colors';
import breakpoint from '../breakpoints';

const StyledBlockBulletPointDiv = styled.div`
    display: block;
    background-color: ${colors.logo_blue};
    color: ${colors.wh};
    padding: 1em;
    margin: 1em;
    border-radius: 4px;
    text-align: center;

    i {
        font-size: 4em;
    }

    @media only screen and ${breakpoint.device.xs} {
        width: 38%;
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 20%;
    }

    @media only screen and ${breakpoint.device.lg} {
        width: 20%;
    }
`

export const BlockBulletPoint = ({bulletPoint}) => {
    return (
        <StyledBlockBulletPointDiv>
            <i class="fas fa-check-square f-CheckListIcon"></i>
            <h4 className="f-h4">{bulletPoint}</h4>
        </StyledBlockBulletPointDiv>
    )
}