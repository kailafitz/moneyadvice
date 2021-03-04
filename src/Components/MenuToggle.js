import React from "react";

// Package imports
import { motion } from "framer-motion";

// styled-components imports
import styled from 'styled-components';

const MobileMenuButton = styled.div `
  z-index: 99;
  cursor: pointer;
  height: 20px;
  width: 20px;
`

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const transition = { duration: 0.3 };

export function MenuToggle({ toggle, isOpen }) {
  return (
    <MobileMenuButton onClick={toggle}>
      <svg width="20" height="20" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(189, 92%, 30%)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(189, 92%, 30%)" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(189, 92%, 30%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(189, 92%, 30%)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(189, 92%, 30%)" },
          }}
          transition={transition}
        />
      </svg>
    </MobileMenuButton>
  );
}