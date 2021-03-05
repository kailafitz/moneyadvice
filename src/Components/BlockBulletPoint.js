import React from 'react';

// Package imports
import { motion } from "framer-motion"

// styled-components imports
import styled from 'styled-components';
import colors from '../colors';
import fonts from '../fonts';
import breakpoint from '../breakpoints';

// styled-components
const Styledh3 = styled.h3 `
    font-family: ${fonts.temp_font};
    font-weight: 300;
    color: ${colors.wh};
    text-align: center;

    a {
        text-decoration: none;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.1em;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 1.15em;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 1.2em;
    }

`
const StyledBlockBulletPointDiv = styled.div`
    display: block;
    background-color: ${colors.logo_blue};
    border-radius: 4px;
    text-align: center;

    i {
        color: ${colors.logo_green};
    }

    @media only screen and ${breakpoint.device.xs} {
        width: 38%;
        padding: .5em;
        margin: .5em;

        i {
            font-size: 2.5em;
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 20%;
        padding: 1em;
        margin: 1em;

        i {
            font-size: 2em;
        }
    }

    @media only screen and ${breakpoint.device.lg} {
    }
`
// framer motion
const myVariants = {
    hover: {
        scale: 1.1,
        transition: {
            type: 'spring',
            stiffness: 600,
            staggerChildren: 0.4
        }
    }
}

const childVariants = {
    hover: {
        opacity: 1
    },
}

function BlockBulletPoint({bulletPoint}) {
    return (
        <StyledBlockBulletPointDiv
            as={motion.div}
            variants={myVariants}
            whileHover='hover'
        >
            <motion.i
                className="fas fa-check-square"  
                initial={{ opacity: 0 }}
                variants={childVariants}
            >
            </motion.i>
            <Styledh3>
                {bulletPoint}
            </Styledh3>
        </StyledBlockBulletPointDiv>
    )
}

export default BlockBulletPoint();