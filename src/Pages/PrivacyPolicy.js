import React from 'react'
import Footer from '../Components/Footer';
import { PrivacyPolicyComponent } from '../Components/PrivacyPolicyComponent';
import SectionTitle from '../Components/SectionTitle';

export default function PrivacyPolicy() {
    return (
        <>
            <div id="f-PrivacyPolicyBody">
                <SectionTitle title="Privacy Policy" />
                <PrivacyPolicyComponent />
            </div>
            <Footer />
        </>
    )
}