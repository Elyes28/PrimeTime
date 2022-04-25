import React from 'react'
import Title from '../common/title';
import PricingTwo from './element/price2'
import { Container } from 'reactstrap'
const ElementPriceTwo = () => (
    <section className="app2 pricing bg-light-inner p-0">
        <Container>
            <Title heading="Join us" />
            <PricingTwo />
        </Container>
    </section>
)


export default ElementPriceTwo;