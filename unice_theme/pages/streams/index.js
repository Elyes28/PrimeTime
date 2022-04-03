import React from 'react';
import Layout from '../../containers/common/common-layout'
import StreamCard from './streamCard';

const PortfolioTitle4Col = () => (
    <Layout pathList={['portfolio basic', 'basic-4 grid with title']} pathTitle="Streams">
        <StreamCard 
            className="col-lg-3 col-md-4 col-sm-6 isotopeSelector" 
            title="elyes"
            subTitle="Lorem Ipsum"
        />
    </Layout>
)

export default PortfolioTitle4Col;