import React, { useEffect, useState } from 'react'

// Local JSON file
import PolicyData from '../JSON_Data/PrivacyPolicyData.json'

// styled-components imports
import styled from 'styled-components';
import {colors} from '../colors';
import {fonts} from '../fonts'
import breakpoint from '../breakpoints';

// MaterialUI
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// styled-components
const Styledh3 = styled.h3 `
    font-family: ${fonts.temp_font};
    font-weight: 300;
    color: ${colors.logo_blue};
    line-height: 20px;
    margin: 0;

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
const Styledp = styled.p `
    font-family: ${fonts.roboto};
    color: ${colors.bl};
    display: flex;
    align-content: center;
    align-items: center;

    a {
        ${fonts.roboto};
        text-decoration : none;
        color: ${colors.bl};

        &:hover {
            text-decoration: underline;
        }
    }

    i {
        color: ${colors.logo_blue};
        margin-right: .5em;

        @media only screen and ${breakpoint.device.xs} {
            font-size: 1.5em;
        }
    
        @media only screen and ${breakpoint.device.sm} {
            font-size: 1.8em;
        }
    
        @media only screen and ${breakpoint.device.lg} {
            font-size: 2em;
        }
    }

    .f-BulletPointIcon {
        color: ${colors.logo_purple};
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.1em;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 1em;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: .95em;
    }
`
const StyledContainer = styled.div `
    #f-AccordianDetails {
        display: block;
    }

    @media only screen and ${breakpoint.device.xs} {
        width: 90%;

        #f-AccordianDetails {
            display: block;

            #f-DataProtection {
                display: block;
            }
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 80%;

        #f-AccordianDetails {
            display: block;

            #f-DataProtection {
                display: flex;
                
                p {
                    margin-right: 5px;
                }
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {
        width: 70%:
    }
`
// MaterialUI makeStyles
const useStyles = makeStyles((theme) => ({
    root: {
        margin: "0 auto",
    },
    displayBulletpoints: {
        "display": "block",
    },
}));

export const PrivacyPolicyComponent = () => {
    const classes = useStyles();

    const [data, setData] = useState([]);
    const [validData, setValidData] = useState(false);

    const createFunction = () => {
        setData(PolicyData);
    }

    useEffect(() => {
        if (data && data.length > 0) {
            setValidData(true);
        } else {
            createFunction();
        }
    }, [data]);

    return (
        <>
            <StyledContainer className={classes.root}>
                {
                    validData ? (
                        data.map((policy) => {
                            return (
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                        <Styledh3>{policy.title}</Styledh3>
                                    </AccordionSummary>
                                    <AccordionDetails id="f-AccordianDetails">
                                        <Typography>
                                            {policy.details}
                                        </Typography>
                                        {
                                            policy.emailHref ?
                                            <>
                                                <Styledp><i className="fas fa-envelope-square"></i><a href={policy.emailHref}>{policy.emailOne}</a></Styledp>
                                                <Styledp><i className="fas fa-phone-square-alt"></i><a href={policy.numberHref}>{policy.numberOne}</a></Styledp>
                                                <div id="f-DataProtection">
                                                    <Styledp>{policy.dataProtection}</Styledp>
                                                    <Styledp><a href={policy.emailTwoHref}>{policy.emailTwo}</a></Styledp>
                                                </div>                                                
                                            </> : null
                                        }
                                        <ul className={classes.displayBulletpoints + " fa-ul"}>
                                        {
                                            policy.policyBulletPoints ?
                                            policy.policyBulletPoints.map((bulletpoint) => {
                                                return (
                                                    <li><Styledp><span className="fa-li"><i class="fas fa-genderless f-BulletPointIcon"></i></span> {bulletpoint}</Styledp></li>
                                                );
                                            }): null
                                        }
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })
                    )  : ( <Styledh3>Data not found</Styledh3> )
                }
            </StyledContainer>
        </>
    )
}
