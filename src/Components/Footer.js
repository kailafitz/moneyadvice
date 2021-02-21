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
    padding: 2em 1em;
    font-family: ${fonts.roboto};

    #f-BigColumnDiv {
        width: 80%;
        flex-grow: 1;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-content: flex-start;

        .f-FooterColumn {
            margin: 0 2em;
            color: ${colors.wh};
        }

        #f-LogoColumn {
            width: 30%;

            img {
                margin: 1em auto;
                width: 90%;
            }
        }

        #f-OurCompanyColumn {
            width: 20%;
            display: block;

            #f-FooterLinks {
                
                ul {
                    padding: 0;

                    li {
                        list-style-type: none;
                        font-weight: 300;
                        margin: none;
                        
                        a {
                            color: ${colors.wh};
                            text-decoration: none;

                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }

        #f-ContactUsColumn {
            width: 30%;

            p {
                color: ${colors.wh};

                a {
                    text-decoration: none;
                    color: $wh;
                }
            }
        }
    }

    .f-FooterIconContainer {
        display: flex;
        align-items: center;

        i {
            font-size: 2em;
        }

        p {
            padding-left: .5em;
            color: ${colors.wh};

            a {
                text-decoration: none;
                color: $wh;
            }
        }
    }
`

export default function Footer() {
    return (
        <FooterDiv>
            <div id="f-BigColumnDiv">
                <div id="f-LogoColumn" className="f-FooterColumn">
                    <img alt="Logo" src={FooterLogo} />
                </div>
                <div className="f-FooterColumn" id="f-OurCompanyColumn">
                    <div id="f-FooterLinks">
                        <h3 className="f-h3">Our Company</h3>
                        <ul>
                            <li className="f-p"><Link href="/about">About</Link></li>
                            <li className="f-p"><Link href="/features">Features</Link></li>
                            <li className="f-p"><Link href="/contactus">Contact Us</Link></li>
                            <li className="f-p"><Link href="/privacypolicy">Privacy Policy</Link></li>
                            <li className="f-p"><Link href="/">Meet our Team</Link></li>
                            <li className="f-p"><Link href="/downloads">Downloads</Link></li>
                        </ul>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i className="f-FooterIcon" class="fab fa-linkedin"></i>
                        <p className="f-p"><a href="https://www.linkedin.com/company/money-advice/">Follow us on LinkedIn</a></p>
                    </div>
                </div>
                <div className="f-FooterColumn" id="f-ContactUsColumn">
                    <h3 className="f-h3">Contact Us</h3>
                    <p className="f-p">Lunar Technologies Ltd t/a Money Advice,
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
                        <p className="f-p"><a href="tel:00353656849675">+353 65 684 9675</a></p>
                    </div>
                    <div className="f-FooterIconContainer">
                        <i class="fas fa-envelope-square"></i>
                        <p className="f-p"><a href="mailto:support@moneyadvice.ie">support@moneyadvice.ie</a></p>
                    </div>                    
                </div>
            </div>            
        </FooterDiv>
    )
}