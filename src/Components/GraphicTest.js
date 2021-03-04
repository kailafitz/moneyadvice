import React from "react";

// Package imports
import { motion } from "framer-motion";

// styled-components imports
import styled from 'styled-components';

// Media imports
import GraphicOne from "../Images/GraphicOne.png";
import GraphicTwo from "../Images/GraphicTwo.png";

const StyledDiv = styled.div `
    background-image: url(${GraphicOne})
    background-size: contain;
    position: relative;

    #f-Bottom {
        position: absolute;
        top: 0;
        left: 0;
    }
`

const myVariants = {
    initialOne: {
        opacity: 1
    },
    fadeGraphicOne: {
        opacity: 0,
        transition: {
            duration: 5,
            yoyo: Infinity,
        }
    },
    initialTwo: {
        opacity: 0
    },
    fadeGraphicTwo: {
        opacity: 1,
        transition: {
            duration: 5,
            yoyo: Infinity,
        }
    }
}

export default function GraphicTest() {

    return (
        <StyledDiv>
            <motion.img variants={myVariants} initial="initialOne" animate="fadeGraphicOne" id="f-Bottom" src={GraphicOne} />
            <motion.img variants={myVariants} initial="initialTwo" animate="fadeGraphicTwo" src={GraphicTwo} />
        </StyledDiv>        
    )
}