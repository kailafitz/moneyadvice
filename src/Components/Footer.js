import React from 'react'

// Package imports
import { HashLink } from 'react-router-hash-link';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {fonts} from '../fonts';
import {colors} from '../colors';

// MaterialUI
import Link from '@material-ui/core/Link';

// Media imports
import FooterLogo from '../Images/Company-Logos/FooterLogo.png'

// styled-components
const Styledh3 = styled.h3 `
    font-family: ${fonts.temp_font};
    color: ${colors.wh};
    font-weight: 600;

    a {
        text-decoration: none;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 1.2em;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 1.3em;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 1.5em;
    }
`
const Styledp = styled.p `
    font-family: ${fonts.roboto};
    color: ${colors.wh};

    a {
        ${fonts.roboto};
        color: ${colors.wh};
        text-decoration : none;

        &:hover {
            text-decoration: underline;
        }
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
const FooterDiv = styled.footer `
    background-color: ${colors.logo_blue};

    .f-FooterIconContainer {
        display: flex;
        align-items: center;

        i {
            color: ${colors.wh};
        }

        a {
            padding-left: .5em;
            text-decoration: none;
        }
    }

    @media only screen and ${breakpoint.device.xs} {

        #f-CopyrightDiv {
            text-align: left;

            p {
                padding: 1em;
                margin: 0;
            }
        }

        #f-FooterWrapper {
            padding: 3em .5em;
            width: 80%;
            display: block;
            margin: 0 auto;

            #f-LogoColumn {
                width: 80%;
    
                img {
                    margin: 1em auto;
                    width: 90%;
                }
            }

            #f-OurCompanyColumn {
                width: 80%;
                display: block;
    
                #f-FooterLinks {
                    
                    ul {
                        padding: 0;
    
                        li {
                            list-style-type: none;
                        }
                    }
                }
            }

            #f-ContactUsColumn {
                width: 80%;
            }
    
            .f-FooterColumn {
                margin: 0 2em;
            }
        }

        .f-FooterIconContainer {
    
            i {
                font-size: 2em;
            }
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        

        #f-CopyrightDiv {
            text-align: center;
        }

        #f-FooterWrapper {
            padding: 2em .5em;
            width: 95%;
            display: flex;
            justify-content: space-between;
            align-content: flex-start;
        }

        .f-FooterIconContainer {

            i {
                font-size: 1.5em;
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {

        #f-FooterWrapper {
            max-width: 70%;

            #f-LogoColumn {
                img {
                    max-width: 300px;
                }
            }
        }
    }
`

export default function Footer() {
    return (
        <FooterDiv>
            <div id="f-FooterWrapper">
                <div id="f-LogoColumn" className="f-FooterColumn">
                    <img alt="Logo" src={FooterLogo} />
                </div>
                <div className="f-FooterColumn" id="f-OurCompanyColumn">
                    <div id="f-FooterLinks">
                        <Styledh3>Our Company</Styledh3>
                        <ul>
                            <li><Styledp><Link href="/about">About</Link></Styledp></li>
                            <li><Styledp><Link href="/contactus">Contact Us</Link></Styledp></li>
                            <li><Styledp><Link href="/privacypolicy">Privacy Policy</Link></Styledp></li>
                            <li><Styledp><HashLink to="about/#f-TeamType">Meet our Team</HashLink></Styledp></li>
                            <li><Styledp><Link href="/downloads">Downloads</Link></Styledp></li>
                        </ul>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i className="fab fa-linkedin f-FooterIcon"></i>
                        <a href="https://www.linkedin.com/company/money-advice/" rel="noopener noreferrer" target="_blank"><Styledp>Follow us on LinkedIn</Styledp></a>
                    </div>
                </div>
                <div className="f-FooterColumn" id="f-ContactUsColumn">
                    <Styledh3>Contact Us</Styledh3>
                    <Styledp>Lunar Technologies Ltd t/a Money Advice,
                        Registered in Ireland, Registered No: 504675.
                        <br/>
                        <br/>
                        Station Road,<br/>
                        Ennis,<br/>
                        Co. Clare,<br/>
                        Ireland<br/>
                        V95 FN79
                        <br/>
                    </Styledp>
                    <div className="f-FooterIconContainer">
                        <i className="fas fa-phone-square-alt"></i>
                        <a href="tel:00353656849675"><Styledp>+353 65 684 9675</Styledp></a>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i className="fas fa-envelope-square"></i>
                        <a href="mailto:support@moneyadvice.ie"><Styledp>support@moneyadvice.ie</Styledp></a>
                    </div>                    
                </div>
            </div>
            <div id="f-CopyrightDiv">
                <Styledp>Copyright <i className="far fa-copyright"></i> 2021 <a rel="noopener noreferrer" href="https://kailafitz.com" target="_blank">fizzyDesigns</a></Styledp>
            </div>          
        </FooterDiv>
    )
}