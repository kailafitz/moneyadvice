import React from 'react'

// styled-components imports
import styled from 'styled-components';
import breakpoint from '../breakpoints';

// Component imports
import ProductComparisonTables from '../Components/ProductComparisonTables';
import SectionTitle from '../Components/SectionTitle';
import Footer from '../Components/Footer';
import ScrollTopButton from '../Components/ScrollTopButton';

const PageContainer = styled.div `
    width: 100%;
    height: 100%;

    @media only screen and ${breakpoint.device.xs} {
        padding-bottom: 1em;
    }

    @media only screen and ${breakpoint.device.sm} {
        padding: 2em 0;
    }

    @media only screen and ${breakpoint.device.lg} {
        padding: 4em 0;
    }
`

export default function ProductComparison() {
    return (
        <>
            <PageContainer>
                <SectionTitle title="Product Comparison" />
                <ProductComparisonTables />
            </PageContainer>
            <ScrollTopButton />
            <Footer />
        </>
    )
}