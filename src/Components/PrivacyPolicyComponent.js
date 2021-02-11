import React, { useEffect, useState } from 'react'
import PolicyData from '../JSON_Data/PrivacyPolicyData.json'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '70%',
      margin: "0 auto",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    displayBulletpoints: {
        "display": "block",
    }
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
            <div className={classes.root} id="f-PrivacyPolicyAccordion">
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
                                        <Typography className={classes.heading} className="f-h4 f-PolicyTitle">{policy.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.displayBulletpoints}>
                                        <Typography>
                                            {policy.details}
                                        </Typography>
                                        <div>
                                        {
                                            policy.policyBulletPoints ?
                                            policy.policyBulletPoints.map((bulletpoint) => {
                                                return (
                                                    <p className="f-p"><i class="fas fa-circle f-BulletPointIcon"></i> {bulletpoint}</p>
                                                );
                                            }): null
                                        }
                                        </div>
                                        {/* {
                                            policy.policyBulletPoints.map((bulletpoint) => {
                                                return (
                                                    <p><i class="fas fa-circle f-BulletPointIcon"></i> {bulletpoint}</p>
                                                );
                                            })
                                        } */}
                                    </AccordionDetails>
                                </Accordion>
                        );
                    })
                )  : ( <h2>Data not found</h2>)
            } </div>
        </>
    )
}
