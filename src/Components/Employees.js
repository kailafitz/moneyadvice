import React, { useState, useEffect } from 'react'

// Local JSON file
import EmployeeData from '../JSON_Data/EmployeeData.json'

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import fonts from '../fonts';
import colors from '../colors';

// MaterialUI
import Container from '@material-ui/core/Container';

// Component imports
import {EmployeeProfileCard} from './EmployeeProfileCard';

// styled-components
const Styledh3 = styled.h3 `
    font-family: ${fonts.temp_font};
    color: ${colors.logo_purple};
    font-weight: 600;
    text-align: center;
    letter-spacing: 1.5px;

    a {
        text-decoration: none;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.2em;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.3em;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.5em;
    }
`
const TeamsContainer = styled(Container) `
    display: block;
    padding-top: 3em;
    margin: 6em auto;

    #f-TeamType {
        text-align: center;
        display: block;
        margin: 1em 0;

        #f-EmployeeCardContainer {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
        }
    }
`

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
            <TeamsContainer maxWidth="lg">                
                {
                    DataReady ? <div id="f-TeamType">
                        <Styledh3>Development</Styledh3>
                        {/* <p className="f-p">Our development team are spread across the country and the globe. We have a sophisticated team of developers in the great country of India who keep the platform secure and up-to-date.</p> */}
                        <hr />
                        <div id="f-EmployeeCardContainer">
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
                    DataReady ? <div id="f-TeamType">
                        <Styledh3>Support</Styledh3>
                        {/* <p className="f-p">Our support team are available and happy to help you with any queries you may have about our product and services.</p> */}
                        <hr />
                        <div id="f-EmployeeCardContainer">
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
                    DataReady ? <div id="f-TeamType"> 
                        <Styledh3>Administration</Styledh3>
                        {/* <p className="f-p">Our administration team are continuously supporting our business, supporting you.</p> */}
                        <hr />
                        <div id="f-EmployeeCardContainer">
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

            </TeamsContainer>
        </>
    );
}