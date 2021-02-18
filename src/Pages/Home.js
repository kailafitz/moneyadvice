import React from "react";
import LottieMediaCard from "../Components/LottieMediaCard";
import BigLogo from "../Images/LogoBlue-Md.png";
import Finance from "../Lottie/Cash.json"
import Chart from "../Lottie/Chart.json"
import MachineCog from "../Lottie/MachineCog.json"
import { Testimonial } from "../Components/Testimonial";
import Footer from "../Components/Footer";
import ContactUsButton from "../Components/ContactUsButton";
import LottieAnimation from "../Components/LottieAnimation";
import ContactUs from "../Lottie/ContactUs.json";
import Partners from "../Components/Partners";
import Blue from '../Images/BlueSquare.png';
import Green from '../Images/GreenSquare.png';
import Purple from '../Images/PurpleSquare.png';
import Peach from '../Images/PeachSquare.png';
import { Frame } from "framer";
import {
    useViewportScroll,
    motion,
    useTransform,
    useMotionValue
} from 'framer-motion';

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
        <div id="f-BigLogoContainer">
            <div id="f-BigLogo" className="f-MarginAuto">
                <img alt="Logo" src={BigLogo}/>
            </div>
            {/* <div id="f-AnimationDiv">
                <Frame
                    backgroundColor="none"
                    animate={{ rotate: 360 }}
                    transition = {transition}
                >
                    <motion.div style={{ y: y1 }}>
                        <img className="test" id="blue" src={Blue} />
                    </motion.div>
                    <motion.div style={{ y: y2 }}>
                        <img className="test" id="green" src={Green} />
                    </motion.div>
                    <motion.div style={{ y: y3 }}>
                        <img className="test" id="peach" src={Peach} />
                    </motion.div>
                    <motion.div style={{ y: y4 }}>
                        <img className="test" id="purple" src={Purple} />
                    </motion.div>
                </Frame>
            </div> */}
            <div id="f-BigLogoContainer-Text">
                <h1 className="f-h1 f-TextLeft">The only CRM system for financial and mortgage advisors - all in one.</h1>
            </div>
        </div>
        <div id="f-CardContainer">
            <LottieMediaCard animationData={Finance} title="Maximum efficiency in recording & managing your clients' profiles" />
            <LottieMediaCard animationData={Chart} title="Algorithms to aid & support client assessments and advisory services" />
            <LottieMediaCard animationData={MachineCog} title="Heavily equipped with all the right tools; to help you, help your clients" />
        </div>
        <Partners />
        <Testimonial />
        <div id="f-ContactUsButtonContainer">
            <div id="f-LottieDiv">
                <LottieAnimation animationData={ContactUs} />
            </div>
            <ContactUsButton label="Call us today for your demo and a quotation!"/>
        </div>
        <Footer />
  </>
)};