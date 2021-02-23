import React from "react";
import Slider from 'infinite-react-carousel';
import styled from 'styled-components';
import Aviva from "../Images/Customer-Logos/AcumenTrust.jpg"
import BCP from "../Images/Customer-Logos/afsAylward.jpg"
import Haven from "../Images/Customer-Logos/Alliance.jpg"
import IrishLife from "../Images/Customer-Logos/AlphaWealth.jpg"
import NewIreland from "../Images/Customer-Logos/AMJfinancial.jpg"
import RoyalLondon from "../Images/Customer-Logos/Arachas.jpg"
import StandardLife from "../Images/Customer-Logos/bhpInsurances.jpg"
import Zurich from "../Images/Customer-Logos/Bluechip.jpg"
import Conexim from "../Images/Customer-Logos/careycorbett.jpg"
import cmlfinancial from "../Images/Customer-Logos/cmlfinancial.jpg"
import SectionTitle from "./SectionTitle";

const CustomerLogos = [Aviva, BCP, Haven, IrishLife, NewIreland, RoyalLondon, StandardLife, Zurich, Conexim, cmlfinancial];

const StyledSlider = styled(Slider) `
    width: 80%;
    margin: 0 auto;
    padding: 6em 0;

    .carousel-initialized {
        button {
            display: none;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: auto;
        text-align: center;

        #f-CustomerLogo {
            width: 90%;
        }
    }
`

const CustomerSlider = () => {
    return (
        <>
            <SectionTitle title="Our Customers"/>
            <StyledSlider
                autoplay="true"
                autoplaySpeed="800"
                duration="10"
                arrows="true"
                arrowsBlock="true"
                slidesToShow="5"
                pauseOnHover="false"
            >
                {
                    CustomerLogos.map((logo) => {
                        return (
                            <div >
                                <img alt="Customers" src={logo} id="f-CustomerLogo"/>
                            </div>
                        );
                    })
                }
            </StyledSlider>
        </>
    );
}

export default CustomerSlider;