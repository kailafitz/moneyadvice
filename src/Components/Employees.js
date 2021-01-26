import React, { useState, useEffect } from 'react'
import EmployeeData from '../JSON_Data/EmployeeData.json'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from "@material-ui/core"
import ChairmanProfileImage from '../Images/About-Imgs/ChairmanProfileImage.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      large: {
        wclassNameth: theme.spacing(7),
        height: theme.spacing(7),
      },
    },
}));

export const Employees = () => {
    const classes = useStyles();

    const [Data, setData] = useState(new Map());
    const [DataReady, setDataReady] = useState(false);

    const createFunction = () => {
        let data = new Map()
        for (let i = 0; i < EmployeeData.length; i++) {
            if (!(data.has(EmployeeData[i].team_name))) {
                data.set(EmployeeData[i].team_name, [])
                data.get(EmployeeData[i].team_name).push(EmployeeData[i])
            }
            else {
                data.get(EmployeeData[i].team_name).push(EmployeeData[i])
            }
        }
        setData(data)
    }

    useEffect(() => {
        createFunction();
    }, [])

    useEffect(() => {
        if(Data && Data.size > 0) {
            setDataReady(true);
            console.log("hi")
        }     
    }, [Data])

    return (
        <>
            <div id="f-EmployeeBody">                
                {
                    DataReady ? <div className="f-EmployeeTeamContainer"> 
                        <h3 className="f-h3">Devlopment Team</h3>
                        <div className="f-EmployeeCardContainer">
                            {Data.get("Development Team").map((employee) => {
                                return (
                                    <div className={classes.root} className="f-EmployeeCard">
                                        <Avatar
                                        alt="Chairman Profile Image"
                                        src={ChairmanProfileImage}
                                        className={classes.large}
                                        className="f-EmployeeAvatar"
                                        />
                                        <h4 className="f-h4">{ employee.first_name + " " + employee.sur_name }</h4>
                                        <p className="f-p">{ employee.job_description }</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div> : null
                }
                {
                    DataReady ? <div className="f-EmployeeTeamContainer">
                        <h3 className="f-h3">Support Team</h3>
                        <div className="f-EmployeeCardContainer">
                            {Data.get("Support Team").map((employee) => {
                                return (
                                    <div className={classes.root} className="f-EmployeeCard">
                                        <Avatar
                                        alt="Chairman Profile Image"
                                        src={ChairmanProfileImage}
                                        className={classes.large}
                                        className="f-EmployeeAvatar"
                                        />
                                        <h4 className="f-h4">{ employee.first_name + " " + employee.sur_name }</h4>
                                        <p className="f-p">{ employee.job_description }</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div> : null
                }
                {
                    DataReady ? <div className="f-EmployeeTeamContainer"> 
                        <h3 className="f-h3">Admin Team</h3>
                        <div className="f-EmployeeCardContainer">
                            {Data.get("Admin Team").map((employee) => {
                                return (
                                    <div className={classes.root} className="f-EmployeeCard">
                                        <Avatar
                                        alt="Chairman Profile Image"
                                        src={ChairmanProfileImage}
                                        className={classes.large}
                                        className="f-EmployeeAvatar"
                                        />
                                        <h4 className="f-h4">{ employee.first_name + " " + employee.sur_name }</h4>
                                        <p className="f-p">{ employee.job_description }</p>
                                    </div>
                                );
                            })}

                        </div>
                        
                    </div> :null                    
                }

            </div>
        </>
    );
}