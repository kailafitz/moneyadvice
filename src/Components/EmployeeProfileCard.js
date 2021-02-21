import React from 'react';
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {fonts} from '../fonts';
import {colors} from '../colors';

const Styledh4 = styled.h4 `
  font-size: 1.2em;
  font-family: ${fonts.roboto};
  font-weight: 300;
  color: ${colors.wh};
  text-align: "center";
`

const Styledp = styled.p `
  font-size: 1em;
  font-family: ${fonts.roboto};
  color: ${colors.wh};
`

const StyledAvatar = styled(Avatar) `
  margin: .5em auto;
  width: 120px;
  height: 120px;
  border-radius: 4%;
`

const useStyles = makeStyles((theme) => ({
    root: {
      width: "auto",
      padding: "1em",
      margin: "1em",
      borderRadius: "7px",
      display: "block",
      // margin: "auto",
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

export const EmployeeProfileCard = ({img, empName, role}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <StyledAvatar
        alt="Profile Image"
        src={img}
        />
        <Styledh4>{empName}</Styledh4>
        <Styledp>{role}</Styledp>
    </div>
  )
}