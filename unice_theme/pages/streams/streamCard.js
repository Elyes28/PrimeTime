import React, { useState, Fragment, useEffect } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { AllImgData, BagsImgData, FeshionImgData, ShoesImgData, WatchImgData } from './database';
import Lightbox from 'react-image-lightbox-next';
import {Container,Row,Col} from 'reactstrap'
import axios from 'axios';

const feshion = [
    require('../../public/assets/images/portfolio/1.jpg'),
    require('../../public/assets/images/portfolio/2.jpg'),
    require('../../public/assets/images/portfolio/3.jpg'),
    require('../../public/assets/images/portfolio/4.jpg'),
]

const bags = [
    require('../../public/assets/images/portfolio/5.jpg'),
    require('../../public/assets/images/portfolio/6.jpg'),
    require('../../public/assets/images/portfolio/7.jpg'),
    require('../../public/assets/images/portfolio/8.png'),
]

const watches = [
    require('../../public/assets/images/portfolio/11.jpg'),
    require('../../public/assets/images/portfolio/10.jpg'),
    require('../../public/assets/images/portfolio/12.png'),
]

const shoes = [
    require('../../public/assets/images/portfolio/9.jpg'),
    require('../../public/assets/images/portfolio/10.jpg'),
    require('../../public/assets/images/portfolio/12.png'),
    require('../../public/assets/images/portfolio/8.png'),
]

const AllImg = [
    require('../../public/assets/images/portfolio/1.jpg'),
    require('../../public/assets/images/portfolio/2.jpg'),
    require('../../public/assets/images/portfolio/3.jpg'),
    require('../../public/assets/images/portfolio/4.jpg'),
    require('../../public/assets/images/portfolio/5.jpg'),
    require('../../public/assets/images/portfolio/6.jpg'),
    require('../../public/assets/images/portfolio/7.jpg'),
    require('../../public/assets/images/portfolio/8.png'),
    require('../../public/assets/images/portfolio/9.jpg'),
    require('../../public/assets/images/portfolio/10.jpg'),
    require('../../public/assets/images/portfolio/11.jpg'),
    require('../../public/assets/images/portfolio/12.png'),
]

const StreamCard = ({ className, title, subTitle, fluid ,streams }) => {
    
    const initilindex = { index: 0 }
    
   // const currentStreams=streams.slice(indexOfFirstStream,indexOfLastStream);

    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const [activeTab, setActiveTab] = useState('1');
   
            
const getUrl=(id) => {
    return ("/streams/channel?id="+id)
}
             

return (
    
    <Fragment>
        <section className="portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles">
            <div className="filter-section">
                <Container fluid={true}>
                    <Row>
                        <Col xs="12">
                            <Nav tabs className="filter-container isotopeFilters">
                                <NavItem className="list-inline filter">
                                    <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                        All
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                                        Fashion
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                                        Bags
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                                        Shoes
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className={activeTab == '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                                        Watch
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={fluid || 'container'}>
                <TabContent className="isotopeContainer row" activeTab={activeTab}>
                    <TabPane tabId="1">
                        {streams.map((stream, i) => {
                            return (
                                <a href={getUrl(stream["_id"])}>
                                <div className={className} key={i}>
                                    <div className="overlay">
                                        <div className="border-portfolio">
                                            <div className="zoom_gallery" data-source={AllImg[photoIndex.index]}
                                                title="">
                                                <div className="overlay-background" onClick={() =>
                                                    setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                                                }>
                                                    <i aria-hidden="true" className="fa fa-plus"></i>
                                                </div>
                                                <img alt="" className="img-fluid blur-up lazyload"
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
                                                {photoIndex.isOpen && (
                                                    <Lightbox
                                                        mainSrc={AllImg[photoIndex.index]}
                                                        nextSrc={AllImg[(photoIndex.index + 1) % AllImg.length]}
                                                        prevSrc={AllImg[(photoIndex.index + AllImg.length - 1) % AllImg.length]}
                                                        imageTitle={photoIndex.index + 1 + "/" + AllImg.length}
                                                        onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                                                        onMovePrevRequest={() => setPhotoIndex({...photoIndex , index:(photoIndex.index + AllImg.length - 1) % AllImg.length})}
                                                        onMoveNextRequest={() => setPhotoIndex({...photoIndex , index:(photoIndex.index + 1) % AllImg.length})}
                                                    />
                                                )}

                                            </div>
                                        </div>

                                    </div>
                                    {title &&
                                        <div className="portfolio-text">
                                            <h3 className="head-text">
                                                {stream["streamerName"]}
                                            </h3>
                                            <h6 className="head-sub-text">
                                                {subTitle}
                                            </h6>
                                        </div>}
                                </div>
                                </a>
                            )
                        })}
                    </TabPane>
                    
                   
                    
                   
                </TabContent>
            </div>

           
        </section>
    </Fragment>
);

};

export default StreamCard;