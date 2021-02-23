import React from "react";
import LottieMediaCard from "../Components/LottieMediaCard";
// import BigLogo from "../Images/LogoBlue-Md.png";
// import SmallLogo from "../Images/CompanyName.jpg";
import Graphic from "../Images/IndexGraphic.png"
import Finance from "../Lottie/Cash.json"
import Chart from "../Lottie/Chart.json"
import MachineCog from "../Lottie/MachineCog.json"
import { Testimonial } from "../Components/Testimonial";
import Footer from "../Components/Footer";
import ContactUsButton from "../Components/ContactUsButton";
import LottieAnimation from "../Components/LottieAnimation";
import ContactUs from "../Lottie/ContactUs.json";
import styled from 'styled-components';
import CustomerSlider from "../Components/CustomerSlider";
import Partners from "../Components/Partners";
import {colors} from '../colors'
import {fonts} from '../fonts'
import Blue from '../Images/BlueSquare.png';
import Green from '../Images/GreenSquare.png';
import Purple from '../Images/PurpleSquare.png';
import Peach from '../Images/PeachSquare.png';
// import { Frame } from "framer";
// import {
//     useViewportScroll,
//     motion,
//     useTransform,
//     useMotionValue
// } from 'framer-motion';

const HeaderContainer = styled.div `
    position: relative;
    // background-image: url("./Images/index-bgImg.png");
    // background-position: center;
    // background-size: cover;
    // background-repeat:  no-repeat;
    // background-attachment: fixed;
    display: flex;
    padding: 0 .5em;
    height: 70vh;
    align-items: center;
    justify-content: space-evenly;

    #f-BigLogo {
        width: 30%;

        img {
            width: 100%;
            border-radius: 7px;
            // box-shadow: -2px 3px 10px -3px $grey-dark;
        }
    }

    #f-AnimationDiv {
        width: 300px;
        height: 300px;
        position: relative;

        .test {
            width: 40%;
            border-radius: 4px;
            position: absolute;
            margin: 1em;
        }

        #blue {
            top: 0;
            left: 0;
            z-index: 2;
        }

        #green {
            top: 0;
            right: 0;
            z-index: 3;
        }

        #peach {
            bottom: 0;
            left: 0;
            z-index: -6;
        }

        #purple {
            bottom: 0;
            right: 0;
            z-index: -1;
        }
    }

    #f-BigLogoContainer-Text {
        width: 60%;
        margin: 0 auto;
        font-family: ${fonts.roboto};
        color: ${colors.wh};
        // background: -webkit-linear-gradient(#068095,  #732c4e);
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;

        h1 {
            margin-bottom: 0em;
            font-size: 4em;
            font-family: ${fonts.temp_font};
            font-weight: 800;
            color: ${colors.logo_purple};
            line-height: 1.1em;
            letter-spacing: -.035em;
        }

        h4 {
            color: ${colors.grey_dark};
            margin-top: 0.5em;
            width: 50%;
        }
    }
`

const BackgroundDiv = styled.div `
    z-index: -10;
    width: 100%;
    opacity: .5;
    position: relative;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;

    #blue {
        width: 45%;
        position: absolute;
        top: 0em;
        left: 6em;
        border-radius: 4px;
    }

    #green {
        width: 35%;
        position: absolute;
        top: 2em;
        right: 2em;
        border-radius: 4px;
    }

    #peach {
        width: 25%;
        position: absolute;
        bottom: 8em;
        left: 1em;
        border-radius: 4px;
    }

    #purple {
        width: 45%;
        position: absolute;
        bottom: 0em;
        right: 6em;
        border-radius: 4px;
    }
`
const CardContainer = styled.div `
    width: 100%;
    padding: 3em 0;
    background-color: ${colors.logo_blue};
    display: flex;
    justify-content: space-evenly;
`

const transition = {
    duration: 3,
}

export default function Home() {

    // const { scrollY } = useViewportScroll();
    // const y1 = useTransform(scrollY, [0, 200], [0, 250]);
    // const y2 = useTransform(scrollY, [0, 200], [0, 250]);
    // const y3 = useTransform(scrollY, [0, 100], [0, 300]);
    // const y4 = useTransform(scrollY, [0, 100], [0, 300]);

    // const variants = {
    //     visible: { opacity: 1, scale: 1, y: 0 },
    //     hidden: {
    //       opacity: 0,
    //       scale: 0.65,
    //       y: 50
    //     }
    // };

    return (
    <>
        <HeaderContainer>
            {/* <BackgroundDiv>
                <img className="blue" id="blue" src={Blue} />
                <img className="green" id="green" src={Green} />
                <img className="peach" id="peach" src={Peach} />                 
                <img className="purple" id="purple" src={Purple} />
            </BackgroundDiv> */}
            <div id="f-BigLogo" className="f-MarginAuto">
                <img alt="Logo" src={Graphic}/>
            </div>
            {/* <div id="f-AnimationDiv"> */}
                {/* <Frame
                    backgroundColor="none"
                    animate={{ rotate: 360 }}
                    transition = {transition}
                >
                    <img className="test" id="blue" src={Blue} />
                    <img className="test" id="green" src={Green} />
                    <img className="test" id="peach" src={Peach} />                 
                    <img className="test" id="purple" src={Purple} />
                </Frame> */}
            {/* </div>  */}
            <div id="f-BigLogoContainer-Text">
                {/* <img src={SmallLogo} /> */}
                <h1 className="f-h1 f-TextLeft">The complete CRM system for financial and mortgage advisors - all in one.</h1>
                <h4 className="f-h4">Solutions around client portfolio management in financial and mortgage affairs.</h4>
                <ContactUsButton label="Call us for your demo today!"/>
            </div>
        </HeaderContainer>
        <CardContainer>
            <LottieMediaCard animationData={Finance} title="Maximum efficiency in recording & managing your clients' profiles" />
            <LottieMediaCard animationData={Chart} title="Algorithms to aid & support client assessments and advisory services" />
            <LottieMediaCard animationData={MachineCog} title="Heavily equipped with all the right tools; to help you, help your clients" />
        </CardContainer>
        <Partners />
        <Testimonial />
        <CustomerSlider />
        <div id="f-ContactUsButtonContainer">
            <div id="f-LottieDiv">
                <LottieAnimation animationData={ContactUs} />
            </div>
            <ContactUsButton label="Call us today for your demo and a quotation!"/>
        </div>
        <Footer />
  </>
)};