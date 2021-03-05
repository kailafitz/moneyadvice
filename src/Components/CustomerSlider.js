import React from "react";

// Package imports
import Slider from 'infinite-react-carousel';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';

// Component imports
import SectionTitle from "./SectionTitle";

// Media imports
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

// styled-components
const StyledSlider = styled(Slider) `
    margin: 0 auto;
    width: 70%;

    #f-CustomerLogo {
        border-radius: 4px;
    }

    @media only screen and ${breakpoint.device.xs} {
        padding: 1em 0;

        div {
            .carousel-item {
                width: 100px;
            }     

            #f-CustomerLogo {
                width: 90%;
            }
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        padding: 4em 0;

        div {

            #f-CustomerLogo {
                width: 70%;
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {
        padding: 6em 0;
    }
`
const StyledContainer = styled.div `
    @media only screen and ${breakpoint.device.xs} {
        padding: 2em 0;
    }
`

const CustomerLogos = [Aviva, BCP, Haven, IrishLife, NewIreland, RoyalLondon, StandardLife, Zurich, Conexim, cmlfinancial];

export default function CustomerSlider() {
    return (
        <StyledContainer>
            <SectionTitle title="Our Customers"/>
            <StyledSlider
                autoplay={true}
                autoplaySpeed="800"
                arrows={false}
                arrowsBlock={false}
                slidesToShow={5}
                pauseOnHover={false}
            >
                {
                    CustomerLogos.map((logo) => {
                        return (
                            <div>
                                <img alt="Customers" src={logo} id="f-CustomerLogo"/>
                            </div>
                        );
                    })
                }
            </StyledSlider>
        </StyledContainer>
    );
}
