import React from 'react';

// Component imports
import Footer from '../Components/Footer';
import { ProductFeaturesComponentTwo } from '../Components/ProductFeaturesComponentTwo'
import ScrollTopButton from '../Components/ScrollTopButton';

export default function ProductFeatures() {
    return (
        <> 
            <ProductFeaturesComponentTwo />
            <ScrollTopButton />
            <Footer />
        </>
    )
}