import React from 'react';
import { Container } from "@material-ui/core";
import Aviva from "../Images/Partner-Logos/Aviva.png"
import BCP from "../Images/Partner-Logos/BCP.png"
import Haven from "../Images/Partner-Logos/Haven.png"
import IrishLife from "../Images/Partner-Logos/IrishLife.png"
import NewIreland from "../Images/Partner-Logos/NewIreland.png"
import RoyalLondon from "../Images/Partner-Logos/RoyalLondon.png"
import StandardLife from "../Images/Partner-Logos/StandardLife.png"
import Zurich from "../Images/Partner-Logos/Zurich.png"
import Conexim from "../Images/Partner-Logos/Conexim.png"
import SectionTitle from "../Components/SectionTitle";

export default function Partners() {
 
    // const PartnerLogos = [{Aviva}, {BCP}, {Haven}, {IrishLife}, {NewIreland}, {RoyalLondon}, {StandardLife}, {Zurich}, {Conexim}];

    const PartnerLogos = [Aviva, BCP, Haven, IrishLife, NewIreland, RoyalLondon, StandardLife, Zurich, Conexim];

    return (
        <Container id="f-PartnerLogosContainer">
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
        </Container>
    )
}