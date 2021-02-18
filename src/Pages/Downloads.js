import React from 'react';
import Footer from '../Components/Footer';
import SectionTitle from '../Components/SectionTitle';
import DownloadMediaCard from '../Components/DownloadMediaCard';

const Downloads = () => (
    <>
        <SectionTitle title="Downloads" />
        <div id="f-DownloadsContainer">
            <DownloadMediaCard src="../Downloads/WebsiteContentReview" title="Product Brochure – Money Advice + CRM"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview" title="Additional Broker Services"/>
            <DownloadMediaCard src="../Downloads/WebsiteContentReview" title="Mortgage Process Guide"/>
        </div>
        <Footer />
    </>
);

export default Downloads;