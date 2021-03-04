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
        font-size: 1.1;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 1.15;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 1.2em;
    }
`

const Styledp = styled.p `
    font-family: ${fonts.roboto};
    color: ${colors.bl};

    a {
        ${fonts.roboto};
        text-decoration : none;

        &:hover {
            text-decoration: underline;
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

    @media only screen and ${breakpoint.device.xs} {
        width: 90%;
    }

    @media only screen and ${breakpoint.device.sm} {
        width: 80%:
    }

    @media only screen and ${breakpoint.device.lg} {
        width: 70%:
    }
`

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
                                    <AccordionDetails className={classes.displayBulletpoints}>
                                        <Typography>
                                            {policy.details}
                                        </Typography>
                                        <ul className="fa-ul">
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
            } </StyledContainer>
        </>
    )
}
