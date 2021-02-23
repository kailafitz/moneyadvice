import React from 'react'
import ProductComparisonTables from '../Components/ProductComparisonTables'
import SectionTitle from '../Components/SectionTitle'
import Footer from '../Components/Footer'
import styled from 'styled-components';
import breakpoint from '../breakpoints';

const PageContainer = styled.div `
    width: 100%;
    height: 100%;
`

export default function ProductComparison() {
    return (
        <>
            <PageContainer>
                <SectionTitle title="Product Comparison" />
                <ProductComparisonTables />
                <Footer />
            </PageContainer>
        </>
    )
}