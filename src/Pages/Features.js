import React from 'react'
import FeatureChecklistTable from '../Components/FeatureChecklistTable'
import { FeaturesDetail } from '../Components/FeaturesDetail'
import Footer from '../Components/Footer'
import { ProductFeature } from '../Components/ProductFeature'

export default function Features() {
    return (
        <> 
            <ProductFeature />
            <FeatureChecklistTable />
            {/* <FeaturesDetail /> */}
            <Footer />
        </>
    )
}