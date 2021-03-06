import React from 'react';

// Component imports
import {Footer} from '../Components/Footer';
import {AdditionalServicesComponent} from '../Components/AdditionalServicesComponent'
import {ScrollTopButton} from '../Components/ScrollTopButton';

export const AdditionalServices = () => {
    return (
        <> 
            <AdditionalServicesComponent />
            <ScrollTopButton />
            <Footer />
        </>
    )
}