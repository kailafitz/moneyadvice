import React from 'react'

// styled-components imports
import styled from 'styled-components';

// Component imports
import ProductComparisonTables from '../Components/ProductComparisonTables';
import SectionTitle from '../Components/SectionTitle';
import Footer from '../Components/Footer';

const PageContainer = styled.div `
    width: 100%;
    height: 100%;
    padding: 5em 0;
`

export default function ProductComparison() {
    return (
        <>
            <PageContainer>
                <SectionTitle title="Product Comparison" />
                <ProductComparisonTables />
            </PageContainer>
            <Footer />
        </>
    )
}