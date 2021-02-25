import React from 'react'

// styled-components imports
import styled from 'styled-components';

// Component imports
import Footer from '../Components/Footer';
import { PrivacyPolicyComponent } from '../Components/PrivacyPolicyComponent';
import SectionTitle from '../Components/SectionTitle';

const PrivacyPolicyDiv = styled.div `
    padding: 2em .5em;
`

export default function PrivacyPolicy() {
    return (
        <>
            <PrivacyPolicyDiv>
                <SectionTitle title="Privacy Policy" />
                <PrivacyPolicyComponent />
            </PrivacyPolicyDiv>
            <Footer />
        </>
    )
}