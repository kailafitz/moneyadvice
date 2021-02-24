import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import OverviewData from '../JSON_Data/ProductOverview.json'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SectionTitle from './SectionTitle';
import { BlockBulletPoint } from './BlockBulletPoint';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import {colors} from '../colors';
import {fonts} from '../fonts'
import breakpoint from '../breakpoints';

const OverviewContainer = styled(Container) `
    margin: 0 auto;

    h4 {
        font-family: ${fonts.temp_font};
        font-weight: 300;
        color: ${colors.logo_blue};
    }

    #f-OverviwMainDescription {
        p {
            font-family: ${fonts.roboto};
            color: ${colors.bl};
        }
    
        span {
            font-family: ${fonts.temp_font};
            font-weight: 300;
            color: ${colors.logo_blue};
        }
    }    

    h3 {
        font-weight: 600;
        font-family: ${fonts.temp_font};
        color: ${colors.logo_blue};
    }

    .f-BulletPointIcon {
        ${colors.logo_purple};
    }

    @media only screen and ${breakpoint.device.xs} {
        h4 {
            font-size: 1.2em;
        }

        h3 {
            font-size: 1.5em;
            text-align: center;
        }

        #f-OverviwMainDescription {
            paddingBottom: 2em;
            column-count: 1;

            p {
                font-size: 1.3em;
                line-height: 28px;
            }
        
            span {
                font-size: 1.2em;
            }
        }

        #f-OverviewTableContainer {
            display: block;

            h4 {
                width: 100%;
            }
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        #f-OverviwMainDescription {
            paddingBottom: 4em;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
            -webkit-column-gap: 20px;
            -moz-column-gap: 20px;
            column-gap: 20px;
        }

        #f-OverviewTableContainer {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            h4 {
                width: 40%;
            }

            h4 {
                width: 100%;
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {
        h4 {
            font-size: 1.2em;
        }
    
        h3 {
            font-size: 1.5em;
            text-align: center;
        }
        
        #f-OverviwMainDescription {
            paddingBottom: 4em;
            -webkit-column-count: 2;
            -moz-column-count: 2;
            column-count: 2;
            -webkit-column-gap: 20px;
            -moz-column-gap: 20px;
            column-gap: 20px;

            p {
                font-size: 1em;
            }
        
            span {
                font-size: 1.2em;
            }
        }

        #f-OverviewTableContainer {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            h4 {
                width: 40%;
            }
        }
    }
`
const StyledTable = styled(TableContainer) `
    @media only screen and ${breakpoint.device.xs} {
        width: 100%;
    }

    @media only screen and ${breakpoint.device.lg} {
        width: 55%;
    }
`

const useStyles = makeStyles({
    root: {
    },
});

export default function ProductOverview() {
    const classes = useStyles();

    const [data, setData] = useState([]);

    const createFunction = () => {
        setData(OverviewData);
    }

    useEffect(() => {
        createFunction();
    }, [data]);

    return (
        <>
            <OverviewContainer maxWidth="lg">
                <SectionTitle title="What is MoneyAdvice CRM?" />
                {
                    data.map((overview) => {
                        return (
                            <>
                                <h4>Money Advice +CRM and Money Advice are web-based software packages developed to provide Financial Advisors, Financial Planners, Mortgage Advisors, and Finance Consultants, with comprehensive quotations and CRM platforms to empower them to compliantly provide in-depth, quality advice and on-going services to their clients.</h4>
                                <div id="f-OverviwMainDescription">
                                    <p>In building software solutions for our advisor customers we have also committed to providing full support across all financial services, mortgage and broker lending products and to integrate with the other systems and providers where we can improve on services to our clients. Our objective is to provide substantial saving in administration time, compliance management, and creation of revenue opportunities for advisors though marketing capabilities.</p>
                                    <p>We provide online links to providers in the areas of life protection products, wealth management, pensions, mortgages, and personal lines general insurance. <span>We firmly believe in supporting our customers and provide dedicated support and on-site training to new clients while getting established with our software.</span> Training and Helpdesk supports are available to all customers on an on-going basis. Existing client banks and customer information can be imported into the system. Quotations, research reports, fact finds, compliance questionnaires, portfolio reports, client risk profile reports and needs analysis reports are printed on designed forms with the advisors branding prominent. All reports are graphically aligned to the fact find reports to provide comprehensive client presentations in an attractive format. Fact find reports are automatically updated from insurer data downloads.</p>
                                    <p>Money Advice systems are linked to MoneyMate's new platform Fund Focus providing fund information and performance data on more than 850 investment funds with supporting fact sheets where available. <span>Customers of Money Advice systems, can upload client model portfolios directly into Fund Focus where users can analyse the portfolio's overall risk and performance.</span> Our Financial Planning module incorporates full client needs analysis, client portfolio details, client assets and liabilities graphically displayed, and cash flow charts with future needs mapped showing calculations.<br />
                                    <br />
                                    <span>Mortgage Advisors</span> can avail of the quotations system with up-to-date mortgage rates from MoneyMate. A new data capture facility has been created specifically to deal with mortgage enquiries which asks the relevant questions to establish affordability and qualify the lead. The affordability calculators of Haven, KBC, Permanent TSB have been integrated so that the advisor can check the affordability against each lender or all of them at once. These enquiries can also be converted and submitted as Online applications to Haven Mortgages Limited (AIB Group).<br />For the lenders who do not provide online services we have provided a generic mortgage application section, which has all the information fields required by any lender. Additionally the system provides the following mortgage related calculators : Repayment (monthly, interest only, and bi-weekly), Stamp duty, Loan consolidation, Extra monthly payment and/or lump sum, Mortgage comparison (different rates, terms, amounts).</p>
                                </div>
                                <h3>{overview.overviewSubtitle}</h3>
                                <div id="f-BlockBulletPointWrapper">
                                {
                                overview.overviewBulletPoints.map((bulletpoint) => {
                                    return (
                                        <BlockBulletPoint bulletPoint={bulletpoint} />
                                    );
                                })
                                }
                                </div>
                                <h3>Compliance tools (CPC 2012) are a strong feature of the system with helpful checklists and prompts.</h3>
                                <div id="f_OverviewTableContainer">
                                    <h4>The system produces compliance reports on a product, advisor, and office wide basis.
                                    <br />
                                    <br />
                                    The product library is a powerful resource in the system and includes links to insurer's libraries and also PDF's of actual documents. Having access to a web based system allows access to client files and systems from anywhere with an internet connection, enabling users track sales activity at an office, individual or a team level</h4>
                                    <StyledTable component={Paper} className={classes.root}>
                                        <Table size="small" aria-label="a dense table">
                                            <TableBody>
                                                {
                                                    overview.overviewTable.map((cell) => (
                                                        <TableRow>
                                                            <TableCell component="th" scope="row" align="left">
                                                                <i class="fas fa-genderless f-BulletPointIcon"></i> {cell}
                                                            </TableCell>
                                                        </TableRow>
                                                        )
                                                    )
                                                }
                                            </TableBody>
                                        </Table>
                                    </StyledTable>
                                </div>      
                            </>
                        );
                    })
                }
            </OverviewContainer>
    </>
    )
}