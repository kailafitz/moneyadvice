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
import { useNavigate } from 'react-router-dom'
import ContainedButtons from "../Components/ActionButton";


const Home = () => (
    <div>
        <div id="f-BigLogoContainer">
            <img alt="Logo" src={BigLogo} id="f-BigLogo"/>
            <div id="f-BigLogoContainer-Text">
                <h1 className="f-h1">The best CRM system for financial and property advisors - all in one.</h1>
            </div>
        </div>
        <div id="f-CardContainer">
            <MediaCard animationData={Finance} title="Stay Efficient with Reliable Calculation" />
            <MediaCard animationData={Chart} title="Track Your Clients in a Single View" />
            <MediaCard animationData={MachineCog} title="An Integrated System for all your needs" />
        </div>
        <Container id="f-PartnerLogosContainer">
            <div id="f-PartnerLogosContainer-Heading">
                <h2 className="f-h2">Our Partners</h2>
            </div>
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
        <ContainedButtons />
        {/* <button className="f-h3" id="f-ActionButton">
            Call us today for your demo and a quotation!
        </button> */}
        <Footer />
  </div>
);

export default Home;