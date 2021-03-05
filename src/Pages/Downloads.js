import React from 'react';

// styled-components imports
import styled from 'styled-components';

// Component imports
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import DownloadMediaCard from '../Components/DownloadMediaCard';
import ScrollTopButton from '../Components/ScrollTopButton';

// styled-components
const DownloadsDiv = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-grow: 1;
    padding: 2em .5em;
`

export default function Downloads() {
    <>
        <SectionTitle title="Downloads" />
        <DownloadsDiv>
            <DownloadMediaCard src="../Downloads/MoneyAdviceCRM_ProductBrochure" title="Product Brochure – Money Advice CRM" doc="MoneyAdviceCRM_ProductBrochure.pdf"/>
            <DownloadMediaCard src="../Downloads/MoneyAdviceCRM_AdditionalServices.pdf" title="Additional Broker Services" doc="MoneyAdviceCRM_AdditionalServices.pdf"/>
            <DownloadMediaCard src="../Downloads/MoneyAdviceCRM_MortgageProcess.pdf" title="Mortgage Process Guide" doc="MoneyAdviceCRM_MortgageProcess.pdf"/>
            <DownloadMediaCard src="../Downloads/MoneyAdviceCRM_DocumentScanner_UserGuide.pdf" title="Document Scanner User Guide" doc="MoneyAdviceCRM_DocumentScanner_UserGuide.pdf"/>
            <DownloadMediaCard src="../Downloads/MoneyAdviceCRM_NewCompliance_and_NeedsAnalysis_Process.pdf" title="New Compliance and Needs Analysis Process" doc="MoneyAdviceCRM_NewCompliance_and_NeedsAnalysis_Process.pdf"/>
            <DownloadMediaCard src="../Downloads/MoneyAdviceCRM_BankersOrders.pdf" title="Money Advice Bankers Order" doc="MoneyAdviceCRM_BankersOrders.pdf"/>
            <DownloadMediaCard src="../Downloads/MoneyAdviceCRM_Authorisation_Formw.pdf" title="Money Advice Authorisation Form" doc="MoneyAdviceCRM_Authorisation_Form.pdf"/>
        </DownloadsDiv>
        <ScrollTopButton />
        <Footer />
    </>
}