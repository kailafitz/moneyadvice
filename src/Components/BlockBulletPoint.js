import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

const StyledBlockBulletPointDiv = styled.div`
    display: block;
    background-color: #068095;
    color: #ffffff;
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
        width: 38%;
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