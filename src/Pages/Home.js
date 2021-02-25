import React from "react";

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import {colors} from '../colors'
import {fonts} from '../fonts'

// MaterialUI
import LottieMediaCard from "../Components/LottieMediaCard";
import Footer from "../Components/Footer";
import ContactUsButton from "../Components/ContactUsButton";
import LottieAnimation from "../Components/LottieAnimation";
import ContactUs from "../Lottie/ContactUs.json";
import Testimonial from "../Components/Testimonial";

// Component imports
import CustomerSlider from "../Components/CustomerSlider";
import Partners from "../Components/Partners";

// Media imports
import Graphic from "../Images/IndexGraphic.png"
// Lottie animations (JSON files)
import Finance from "../Lottie/Cash.json"
import Chart from "../Lottie/Chart.json"
import MachineCog from "../Lottie/MachineCog.json"

const HeaderContainer = styled.div `
    position: relative;
    padding: 1em;

    #f-BigLogoContainer-Text {
        margin: 0 auto;

        h1 {
            font-family: ${fonts.temp_font};
            font-weight: 800;
            color: ${colors.logo_purple};
            margin-bottom: 0em;
            line-height: 1.1em;
            letter-spacing: -.035em;
        }

        h4 {
            color: ${colors.grey_dark};
            font-family: ${fonts.roboto};
            font-weight: 300;
            margin: 0.5em 0;
        }
    }

    @media only screen and ${breakpoint.device.xs} {
        height: 100%;
        display: block;
        padding-bottom: 3em;

        #f-BigLogo {
            margin: 0 auto;
            display: block;
            width: 80%;
            padding-top: 1em;
            text-align: center;

            img {
                width: 75%;
            }
        }

        #f-BigLogoContainer-Text {
            width: 80%;

            h1 {
                font-size: 3.2em;
            }

            h4 {
                font-size: 1.3em;
                width: 90%;
            }
        }    
    }

    @media only screen and ${breakpoint.device.sm} {
        display: flex;
        padding: 2em;
        height: 35vh;
        align-items: center;

        #f-BigLogo {
            display: none;
            width: 20%;
    
            img {
                width: 80%;
            }
        }

        #f-BigLogoContainer-Text {
            width: 70%;

            h1 {
                font-size: 2em;
            }

            h4 {
                font-size: 1.3em;
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {
        height: 70vh;
        justify-content: space-evenly;

        #f-BigLogo {
            display: block;
            width: 20%;
    
            img {
                width: 100%;
            }
        }

        #f-BigLogoContainer-Text {
            width: 60%;
            margin: 0 auto;
    
            h1 {
                font-size: 4em;
                line-height: 1.1em;
                letter-spacing: -.035em;
            }
    
            h4 {
                font-size: 1.2em;
                width: 50%;
            }
        }
    
    }
`
const CardContainer = styled.div `
    width: 100%;
    padding: 3em 0;
    background-color: ${colors.logo_blue};

    @media only screen and ${breakpoint.device.xs} {
        display: block;
    }

    @media only screen and ${breakpoint.device.sm} {
        display: flex;
        justify-content: space-evenly;
    }

    @media only screen and ${breakpoint.device.lg} {
    }
`

const ContactUsButtonContainer = styled.div `
    
    @media only screen and ${breakpoint.device.xs} {
        padding: 2em;
        display: block;
        text-align: center;

        #f-LottieDiv {
            width: 80%;
            margin: 0 auto;
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        padding: 2em;
        display: flex;
        justify-content: center;
        align-items: center;

        #f-LottieDiv {
            width: 30%;
            margin: 0;
        }
    }

    @media only screen and ${breakpoint.device.lg} {
    }
`

export default function Home() {
    return (
    <>
        <HeaderContainer>            
            <div id="f-BigLogo">
                <img alt="Logo" src={Graphic}/>
            </div>
            <div id="f-BigLogoContainer-Text">
                <h1>The complete CRM system for financial and mortgage advisors - all in one.</h1>
                <h4>Solutions around client portfolio management in financial services and mortgage affairs.</h4>
                <ContactUsButton label="Call us for your demo today!"/>
            </div>
        </HeaderContainer>
        <CardContainer>
            <LottieMediaCard animationData={Finance} title="Maximum efficiency in recording & managing your clients' profiles" />
            <LottieMediaCard animationData={Chart} title="Calculators to aid & support client assessments and advisory services" />
            <LottieMediaCard animationData={MachineCog} title="All the right tools to enable you to help your clients" />
        </CardContainer>
        <Partners />
        <Testimonial />
        <CustomerSlider />
        <ContactUsButtonContainer>
            <div id="f-LottieDiv">
                <LottieAnimation animationData={ContactUs} />
            </div>
            <ContactUsButton label="Call us today for your demo and a quotation!"/>
        </ContactUsButtonContainer>
        <Footer />
  </>
)};