import React from 'react'
import Footer from '../Components/Footer';
import { PrivacyPolicyComponent } from '../Components/PrivacyPolicyComponent';

export default function PrivacyPolicy() {
    return (
        <div id="f-PrivacyPolicyBody">
            <h2 className="f-h2">Privacy Policy</h2>
            <PrivacyPolicyComponent />
            <Footer />
        </div>
    )
}