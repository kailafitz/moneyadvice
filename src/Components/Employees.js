import React, { useState, useEffect } from 'react'
import EmployeeData from '../JSON_Data/EmployeeData.json'
import { EmployeeProfileCard } from './EmployeeProfileCard';
import { Container } from '@material-ui/core';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {fonts} from '../fonts';
import {colors} from '../colors';

const TeamsContainer = styled(Container) `
    display: block;
    padding-top: 3em;
    margin: 6em auto;
`
const TeamType = styled.div `
    text-align: center;
    display: block;
    border-radius: 3px;
    padding: .5em;
    margin: 1em 0;
`

const EmployeeCardContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    border-radius: 4px;
    // background-color: ${colors.logo_purple};
    // box-shadow: -2px 3px 10px -3px #111111;
`
const Styledh3 = styled.h3 `
    text-align: center;
    font-size: 1.5em;
    font-family: ${fonts.temp_font};
    font-weight: 300;
    letter-spacing: 1.5px;
    color: ${colors.logo_purple};
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
                    DataReady ? <TeamType>
                        <Styledh3>Development</Styledh3>
                        {/* <p className="f-p">Our development team are spread across the country and the globe. We have a sophisticated team of developers in the great country of India who keep the platform secure and up-to-date.</p> */}
                        <hr />
                        <EmployeeCardContainer>
                            {Data.get("Development Team").map((employee) => {
                                return (
                                    <EmployeeProfileCard
                                        img={employee.profile_img}
                                        empName={employee.first_name + " " + employee.sur_name}
                                        role={employee.role}
                                    />
                                );
                            })}
                        </EmployeeCardContainer>
                    </TeamType> : null
                }
                {
                    DataReady ? <TeamType>
                        <Styledh3>Support</Styledh3>
                        {/* <p className="f-p">Our support team are available and happy to help you with any queries you may have about our product and services.</p> */}
                        <hr />
                        <EmployeeCardContainer>
                            {Data.get("Support Team").map((employee) => {
                                return (
                                    <EmployeeProfileCard
                                        img={employee.profile_img}
                                        empName={employee.first_name + " " + employee.sur_name}
                                        role={employee.role}
                                    />
                                );
                            })}
                        </EmployeeCardContainer>
                    </TeamType> : null
                }
                {
                    DataReady ? <TeamType> 
                        <Styledh3>Administration</Styledh3>
                        {/* <p className="f-p">Our administration team are continuously supporting our business, supporting you.</p> */}
                        <hr />
                        <EmployeeCardContainer>
                            {Data.get("Admin Team").map((employee) => {
                                return (
                                    <EmployeeProfileCard
                                        img={employee.profile_img}
                                        empName={employee.first_name + " " + employee.sur_name}
                                        role={employee.role}
                                    />
                                );
                            })}

                        </EmployeeCardContainer>
                        
                    </TeamType> :null                    
                }

            </TeamsContainer>
        </>
    );
}