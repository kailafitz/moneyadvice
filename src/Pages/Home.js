import React from "react";

// Package imports
import { motion } from "framer-motion";

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import colors from '../colors';
import fonts from '../fonts';

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
import ScrollTopButton from "../Components/ScrollTopButton";
import SectionTitle from "../Components/SectionTitle";

// Media imports
import IndexGraphic from '../Images/IndexGraphic3.png';
// Lottie animations (JSON files)
import Calendar from "../Lottie/Calendar.json";
import Chart from "../Lottie/Chart.json";
import MachineCog from "../Lottie/MachineCog.json";

// styled-components
const Styledh1 = styled.h1 `
    font-family: ${fonts.temp_font};
    tex-align: left;
    padding-top: 1em;
    font-weight: 800;
    line-height: 1.2em;
    letter-spacing: -.035em;
    margin: 0 auto;
    color: ${colors.logo_purple};

    a {
        text-decoration: none;
    }

    @media only screen and ${breakpoint.device.xs} {
        font-size: 2em;
    }

    @media only screen and ${breakpoint.device.sm} {
        font-size: 2.5em;
    }

    @media only screen and ${breakpoint.device.lg} {
        font-size: 4.5vw;
    }
`
const Styledh3 = styled.h3 `
  font-family: ${fonts.temp_font};
  font-size: 1.5em;
  font-weight: 300;
  color: ${colors.grey_dark};
  margin: 0.5em 0;

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
const HeaderContainer = styled.div `
    position: relative;
    padding: 1em;

    #f-BigLogoContainer-Text {
        margin: 0 auto;
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

            h4 {
                width: 90%;
            }
        }    
    }

    @media only screen and ${breakpoint.device.sm} {
        display: flex;
        padding: 2em;
        height: 55vh;
        align-items: center;

        #f-BigLogo {
            display: none;
        }

        #f-BigLogoContainer-Text {
            width: 70%;
        }
    }

    @media only screen and ${breakpoint.device.lg} {
        height: 75vh;
        justify-content: space-evenly;

        #f-BigLogo {
            display: block;
            width: 30%;
    
            img {
                width: 100%;
            }
        }

        #f-BigLogoContainer-Text {
            width: 60%;
            margin: 0 auto;
    
            h4 {
                width: 50%;
            }
        }
    
    }
`
const CardContainer = styled.div `
    width: 100%;
    padding: 2em 0;    
    background-image: linear-gradient(45deg, ${colors.logo_blue}, ${colors.logo_green});

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
    height: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    @media only screen and ${breakpoint.device.xs} {
        padding: 2em;
        text-align: center;

        #f-LottieDiv {
            width: 80%;
            margin: 2em auto;
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

// framer-motion
const HeaderVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
        tansition: {
            type: "spring",
            stiffness: 400,
            damping: 200,
            delay: 1.5,
        }
    }
}

export default function Home() {
    return (
    <>
        <HeaderContainer
            as={motion.div}
            variants={HeaderVariants}
            initial="hidden"
            animate="visible"
        >
            <div id="f-BigLogo">
                <img alt="Logo" src={IndexGraphic}/>
            </div>
            <div id="f-BigLogoContainer-Text">
                <Styledh1>The complete CRM system for financial and mortgage advisors - all in one.</Styledh1>
                <Styledh3>Solutions around client portfolio management in financial services and mortgage affairs.</Styledh3>
                <ContactUsButton label="Call us for your demo today!"/>
            </div>
        </HeaderContainer>
        <CardContainer>
            <LottieMediaCard
                animationData={Calendar}
                title="Volatile Client Profiles"
                subTitle="We make recording and managing your clients' profiles more than efficient. Keep your client information up-to-date with easy maintenance."
            />
            <LottieMediaCard
                animationData={Chart}
                title="Reliable Calculations"
                subTitle="Calculators are in place to aid and support client assessments and advisory services. We have you covered every step of the way."
            />
            <LottieMediaCard
                animationData={MachineCog}
                title="Streamline Processes"
                subTitle="All the right tools to enable you to help your clients. Streamline your business processes; let's make life easier for you as well as your clients."
            />
        </CardContainer>
        <Partners />
        <Testimonial />
        <CustomerSlider />
        <ContactUsButtonContainer>
            <SectionTitle title="Why not call us?" />
            <div id="f-LottieDiv">
                <LottieAnimation animationData={ContactUs} />
            </div>
            <ContactUsButton label="Call us today for your demo and a quotation!"/>
        </ContactUsButtonContainer>
        <ScrollTopButton />
        <Footer />
  </>
)};