import React from 'react';
import Footer from '../Components/Footer';
import { ProductFeaturesComponentTwo } from '../Components/ProductFeaturesComponentTwo'
import { ProductFeature } from '../Components/ProductFeaturesComponentOne';

export default function ProductFeatures() {
    return (
        <> 
            <ProductFeaturesComponentTwo />
            {/* <ProductFeaturesComponentOne /> */}
            <Footer />
        </>
    )
}