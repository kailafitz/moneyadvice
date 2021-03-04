import React from 'react';

// styled-components imports
import styled from 'styled-components';

// Component imports
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import DownloadMediaCard from '../Components/DownloadMediaCard';
import ScrollTopButton from '../Components/ScrollTopButton';

const DownloadsDiv = styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-grow: 1;
    padding: 2em .5em;
`

const Downloads = () => (
    <>
        <SectionTitle title="Downloads" />
        <DownloadsDiv>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Product Brochure – Money Advice CRM" doc="WebsiteContentReview.pdf"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Additional Broker Services" doc="WebsiteContentReview.pdf"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Mortgage Process Guide" doc="WebsiteContentReview.pdf"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Document Scanner User Guide" doc="WebsiteContentReview.pdf"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="New Compliance and Needs Analysis Process" doc="WebsiteContentReview.pdf"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Money Advice Bankers Order" doc="WebsiteContentReview.pdf"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Money Advice Authorisation Form" doc="WebsiteContentReview.pdf"/>
        </DownloadsDiv>
        <ScrollTopButton />
        <Footer />
    </>
);

export default Downloads;