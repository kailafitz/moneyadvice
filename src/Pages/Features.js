import React from 'react'
import FeatureChecklistTable from '../Components/FeatureChecklistTable'
import Footer from '../Components/Footer'
import { ProductFeature } from '../Components/ProductFeature'

export default function Features() {
    return (
        <> 
            <ProductFeature />
            <FeatureChecklistTable />
            <Footer />
        </>
    )
}