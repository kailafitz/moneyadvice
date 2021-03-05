import React from 'react';

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';

// Componenr imports
import SectionTitle from "../Components/SectionTitle";

// Media imports
import Aviva from "../Images/Partner-Logos/Aviva.png";
import BCP from "../Images/Partner-Logos/BCP.png";
import Haven from "../Images/Partner-Logos/Haven.png";
import IrishLife from "../Images/Partner-Logos/IrishLife.png";
import NewIreland from "../Images/Partner-Logos/NewIreland.png";
import RoyalLondon from "../Images/Partner-Logos/RoyalLondon.png";
import StandardLife from "../Images/Partner-Logos/StandardLife.png";
import Zurich from "../Images/Partner-Logos/Zurich.png";
import Conexim from "../Images/Partner-Logos/Conexim.png";

// styled-components
const StyledContainer = styled.div `
    display: block;
    padding: 4em 0;
    margin: 0 auto;

    #f-PartnerLogosContainer-Logos {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    @media only screen and ${breakpoint.device.xs} {
        width: 90%;

        #f-PartnerLogosContainer-Logos {
            width: 90%;

            .f-PartnerLogo {
                width: 15vw;
                padding: 0.5em;
                margin: 0 1em;
            }
        }
    }

    @media only screen and ${breakpoint.device.sm} {
        #f-PartnerLogosContainer-Logos {

            .f-PartnerLogo {
                width: 13vw;
                padding: 1em;
                margin: 0 1.5em;
            }
        }
    }

    @media only screen and ${breakpoint.device.lg} {
        width: 80%;

        #f-PartnerLogosContainer-Logos {

            .f-PartnerLogo {
                width: 9vw;
                padding: 1em;
                margin: 0 1.5em;
            }
        }
    }
`

export default function Partners() {
    const PartnerLogos = [Aviva, BCP, Haven, IrishLife, NewIreland, RoyalLondon, StandardLife, Zurich, Conexim];

    return (
        <StyledContainer>
            <SectionTitle title="Our Partners" />
            <div id="f-PartnerLogosContainer-Logos">
                {
                    PartnerLogos.map((logo) => {
                        return (
                            <img alt="Partners" src={logo} className="f-PartnerLogo" />
                        );
                    })
                }
            </div>
        </StyledContainer>
    )
}