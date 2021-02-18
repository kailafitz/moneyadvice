import React, { useState, useEffect } from 'react'
import EmployeeData from '../JSON_Data/EmployeeData.json'
import { makeStyles } from '@material-ui/core/styles';
import Employee1 from '../Images/About-Imgs/Employee1.jpg';
import { EmployeeProfileCard } from './EmployeeProfileCard';
import { Container } from '@material-ui/core';

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
        }     
    }, [Data])

    return (
        <>
            <Container maxWidth="lg" id="f-TeamsContainer">                
                {
                    DataReady ? <div className="f-TeamTypeContainer f-TextCenter">
                        <h3 className="f-h3 f-TextCenter">Development</h3>
                        {/* <p className="f-p">Our development team are spread across the country and the globe. We have a sophisticated team of developers in the great country of India who keep the platform secure and up-to-date.</p> */}
                        <hr />
                        <div className="f-EmployeeCardContainer">
                            {Data.get("Development Team").map((employee) => {
                                return (
                                    <EmployeeProfileCard img={Employee1} empName={ employee.first_name + " " + employee.sur_name } />
                                );
                            })}
                        </div>
                    </div> : null
                }
                {
                    DataReady ? <div className="f-TeamTypeContainer">
                        <h3 className="f-h3 f-TextCenter">Support</h3>
                        {/* <p className="f-p">Our support team are available and happy to help you with any queries you may have about our product and services.</p> */}
                        <hr />
                        <div className="f-EmployeeCardContainer">
                            {Data.get("Support Team").map((employee) => {
                                return (
                                    <EmployeeProfileCard img={Employee1} empName={ employee.first_name + " " + employee.sur_name } />
                                );
                            })}
                        </div>
                    </div> : null
                }
                {
                    DataReady ? <div className="f-TeamTypeContainer"> 
                        <h3 className="f-h3 f-TextCenter">Administration</h3>
                        {/* <p className="f-p">Our administration team are continuously supporting our business, supporting you.</p> */}
                        <hr />
                        <div className="f-EmployeeCardContainer">
                            {Data.get("Admin Team").map((employee) => {
                                return (
                                    <EmployeeProfileCard img={Employee1} empName={ employee.first_name + " " + employee.sur_name } />
                                );
                            })}

                        </div>
                        
                    </div> :null                    
                }

            </Container>
        </>
    );
}