import React from 'react'

// styled-components imports
import styled from 'styled-components';

// Component imports
import Footer from '../Components/Footer';
import PrivacyPolicyComponent from '../Components/PrivacyPolicyComponent';
import ScrollTopButton from '../Components/ScrollTopButton';
import SectionTitle from '../Components/SectionTitle';

// styled-components
const PrivacyPolicyDiv = styled.div `
    padding: 2em .5em;
`

export function PrivacyPolicy() {
    return (
        <>
            <PrivacyPolicyDiv>
                <SectionTitle title="Privacy Policy" />
                <PrivacyPolicyComponent />
            </PrivacyPolicyDiv>
            <ScrollTopButton />
            <Footer />
        </>
    )
}

export default PrivacyPolicy();