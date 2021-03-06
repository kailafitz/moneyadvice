import React from "react";

// Package imports
import Slider from 'infinite-react-carousel';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';

// Component imports
import {SectionTitle} from "./SectionTitle";

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

    @media only screen and ${breakpoint.device.xs} {
        padding: 1em 0;
        
        .f-CustomerLogo {
            width: 100%;
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        
    }

    @media only screen and ${breakpoint.device.lg} {
        .f-CustomerLogo {
            max-width: 60%;
        }
    }
`
const StyledContainer = styled.div `
    @media only screen and ${breakpoint.device.xs} {
        padding: 2em 0;
    }
`

const CustomerLogos = [Aviva, BCP, Haven, IrishLife, NewIreland, RoyalLondon, StandardLife, Zurich, Conexim, cmlfinancial];

export const CustomerSlider = () => {

    return (
        <StyledContainer>
            <SectionTitle title="Our Customers"/>
            <StyledSlider
                autoplay={true}
                autoplaySpeed={800}
                arrows={false}
                arrowsBlock={false}
                slidesToShow={5}
                adaptiveHeight={true}
                pauseOnHover={false}
                overScan={2}
            >
                {
                    CustomerLogos.map((logo) => {
                        return (
                            <div>
                                <img alt="Customers" src={logo} className="f-CustomerLogo"/>
                            </div>
                        );
                    })
                }
            </StyledSlider>
        </StyledContainer>
    );
}