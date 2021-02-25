import React from 'react';

// styled-components imports
import styled from 'styled-components';

// Component imports
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import DownloadMediaCard from '../Components/DownloadMediaCard';

const DownloadsDiv = styled.div `
    display: flex;
    flex-grow: 1;
    padding: 2em .5em;
`

const Downloads = () => (
    <>
        <SectionTitle title="Downloads" />
        <DownloadsDiv>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Product Brochure – Money Advice + CRM" doc="WebsiteContentReview.pdf"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Additional Broker Services" doc="WebsiteContentReview.pdf"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview.pdf" title="Mortgage Process Guide" doc="WebsiteContentReview.pdf"/>
        </DownloadsDiv>
        <Footer />
    </>
);

export default Downloads;