import React from 'react';
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "block",
      margin: "auto",
      '& > *': {
        margin: theme.spacing(1),
      },
      large:  {
        wclassNameth: theme.spacing(7),
        height: theme.spacing(7),
      },
    },
}));

export const EmployeeProfileCard = ({img, empName, title}) => {
    const classes = useStyles();
    return (
        <div className={classes.root} className="f-EmployeeCard f-TextCenter">
            <Avatar
            alt="Profile Image"
            src={img}
            className={classes.large}
            className="f-EmployeeAvatar"
            />
            <h4 className="f-h4">{empName}</h4>
            <p className="f-p">{title}</p>
        </div>
    )
}