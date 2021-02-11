import { Container } from "@material-ui/core";
import React from "react";
import MediaCard from "../Components/MediaCard";
import BigLogo from "../Images/LogoBlue-Md.png";
import Finance from "../Lottie/Cash.json"
import Chart from "../Lottie/Chart.json"
import MachineCog from "../Lottie/MachineCog.json"
import Aviva from "../Images/Partner-Logos/Aviva.png"
import BCP from "../Images/Partner-Logos/BCP.png"
import Haven from "../Images/Partner-Logos/Haven.png"
import IrishLife from "../Images/Partner-Logos/IrishLife.png"
import NewIreland from "../Images/Partner-Logos/NewIreland.png"
import RoyalLondon from "../Images/Partner-Logos/RoyalLondon.png"
import StandardLife from "../Images/Partner-Logos/StandardLife.png"
import Zurich from "../Images/Partner-Logos/Zurich.png"
import Conexim from "../Images/Partner-Logos/Conexim.png"
import { Testimonial } from "../Components/Testimonial";
import Footer from "../Components/Footer";
import ContactUsButton from "../Components/ContactUsButton";
import SectionTitle from "../Components/SectionTitle";
import LottieAnimation from "../Components/LottieAnimation";
import Phone from "../Lottie/Phone.json";

const Home = () => (
    <div>
        <div id="f-BigLogoContainer">
            <img alt="Logo" src={BigLogo} id="f-BigLogo"/>
            <div id="f-BigLogoContainer-Text">
                <h1 className="f-h1 f-TextLeft">THE only CRM system for financial and mortgage advisors - all in one.</h1>
            </div>
        </div>
        <div id="f-CardContainer">
            <MediaCard animationData={Finance} title="Maximum efficiency in recording & managing your clients' profiles" />
            <MediaCard animationData={Chart} title="Algorithms to aid & support client assessments and advisory services" />
            <MediaCard animationData={MachineCog} title="Heavily equipped with all the right tools; to help you, help your clients" />
        </div>
        <Container id="f-PartnerLogosContainer">
            <SectionTitle title="Our Partners" />
            <div id="f-PartnerLogosContainer-Logos">
                <img alt="Aviva" src={Aviva} className="f-PartnerLogo" />
                <img alt="BCP" src={BCP} className="f-PartnerLogo" />
                <img alt="Haven" src={Haven} className="f-PartnerLogo" />
                <img alt="IrishLife" src={IrishLife} className="f-PartnerLogo" />
                <img alt="NewIreland" src={NewIreland} className="f-PartnerLogo" />
                <img alt="RoyalLondon" src={RoyalLondon} className="f-PartnerLogo" />
                <img alt="StandardLife" src={StandardLife} className="f-PartnerLogo" />
                <img alt="Zurich" src={Zurich} className="f-PartnerLogo" />
                <img alt="Conexim" src={Conexim} className="f-PartnerLogo" />
            </div>
        </Container>
        <Testimonial />
        <div id="f-ButtonDiv">
            <div id="f-LottieDiv">
                <LottieAnimation animationData={Phone} />
            </div>
            <ContactUsButton label="Call us today for your demo and a quotation!"/>
        </div>
        <Footer />
  </div>
);

export default Home;