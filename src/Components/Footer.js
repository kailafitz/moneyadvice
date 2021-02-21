import React from 'react'
import Link from '@material-ui/core/Link';
import FooterLogo from '../Images/FooterLogo.png'
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {fonts} from '../fonts';
import {colors} from '../colors';

const FooterDiv = styled.footer `
    background-color: ${colors.logo_blue};
    color: ${colors.wh};
    font-family: ${fonts.roboto};

    @media only screen and ${breakpoint.device.xs} {
        padding: 3em .5em;

        #f-FooterWrapper {
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
                            font-weight: 300;
                            margin: 6px 0;
                            
                            a {
                                color: ${colors.wh};
                                text-decoration: none;
                                font-size: 1.3em;
    
                                &:hover {
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                }
            }

            #f-ContactUsColumn {
                width: 80%;

                p {
                    font-size: 1.3em;
                }
            }
    
            .f-FooterColumn {
                margin: 0 2em;
    
                h3 {
                    font-size: 1.5em;
                    font-family: ${fonts.temp_font};
                    font-weight: 600;
                }
            }


        }
        .f-FooterIconContainer {
            display: flex;
            align-items: center;
    
            i {
                font-size: 2em;
            }
    
            a {
                text-decoration: none;
                color: ${colors.wh};
                padding-left: 10px;
                font-size: 1.3em;
            }
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        padding: 2em 1em;

        #f-FooterWrapper {
            flex-grow: 1;
            display: flex;
            justify-content: space-around;
            align-content: flex-start;

            #f-OurCompanyColumn {

                #f-FooterLinks {
                    ul {
                        li {
                            a {
                                font-size: 1em;
                            }
                        }
                    }
                }
            }

            #f-ContactUsColumn {
                p {
                    font-size: 1em;
                }
            }
        }
        .f-FooterIconContainer {
            i {
                font-size: 1.5em;
            }
    
            a {
                font-size: 1em;
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {

        #f-FooterWrapper {
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
                        <h3>Our Company</h3>
                        <ul>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/features">Features</Link></li>
                            <li><Link href="/contactus">Contact Us</Link></li>
                            <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                            <li><Link href="/">Meet our Team</Link></li>
                            <li><Link href="/downloads">Downloads</Link></li>
                        </ul>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i className="f-FooterIcon" class="fab fa-linkedin"></i>
                        <a href="https://www.linkedin.com/company/money-advice/">Follow us on LinkedIn</a>
                    </div>
                </div>
                <div className="f-FooterColumn" id="f-ContactUsColumn">
                    <h3>Contact Us</h3>
                    <p>Lunar Technologies Ltd t/a Money Advice,
                        Registered in Ireland, Registered No: 504675.
                        <br/>
                        <br/>
                        Station Road,<br/>
                        Ennis,<br/>
                        Co. Clare,<br/>
                        Ireland<br/>
                        V95 FN79
                        <br/>
                    </p>
                    <div className="f-FooterIconContainer">
                        <i class="fas fa-phone-square-alt"></i>
                        <a href="tel:00353656849675">+353 65 684 9675</a>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i class="fas fa-envelope-square"></i>
                        <a href="mailto:support@moneyadvice.ie">support@moneyadvice.ie</a>
                    </div>                    
                </div>
            </div>            
        </FooterDiv>
    )
}