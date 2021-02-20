import React, { useState, useEffect } from 'react'
import EmployeeData from '../JSON_Data/EmployeeData.json'
import { makeStyles } from '@material-ui/core/styles';
import { EmployeeProfileCard } from './EmployeeProfileCard';
import { Container } from '@material-ui/core';

export const Employees = () => {

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
                                    <EmployeeProfileCard
                                        img={employee.profile_img}
                                        empName={employee.first_name + " " + employee.sur_name}
                                        role={employee.role}
                                    />
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
                                    <EmployeeProfileCard
                                        img={employee.profile_img}
                                        empName={employee.first_name + " " + employee.sur_name}
                                        role={employee.role}
                                    />
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
                                    <EmployeeProfileCard
                                        img={employee.profile_img}
                                        empName={employee.first_name + " " + employee.sur_name}
                                        role={employee.role}
                                    />
                                );
                            })}

                        </div>
                        
                    </div> :null                    
                }

            </Container>
        </>
    );
}