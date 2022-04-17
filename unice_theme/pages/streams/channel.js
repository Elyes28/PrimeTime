import React, { Fragment, useState, useEffect } from 'react';
import Layout from '../../containers/common/common-layout'
import axios from 'axios';
import Slider from 'react-slick';
import { PortfolioDetail1Data } from './database';
import { useParams } from 'react-router-dom';


const images = [
    require('../../public/assets/images/portfolio/2.jpg'),
    require('../../public/assets/images/portfolio/3.jpg'),
    require('../../public/assets/images/portfolio/5.jpg'),
    require('../../public/assets/images/portfolio/4.jpg'),
    require('../../public/assets/images/portfolio/5.jpg')
]


var settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
};
var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 4 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 575,
            settings: { slidesToShow: 1 }
        }
    ]
};

const PortfolioDetail2 = () => {
   const [stream,setStream]=useState();
   const [user,setUser]=useState();
   useEffect(() => {
    
    setUser(JSON.parse(localStorage.getItem("user")))

  },[]);
    const getStream = async(para) =>
   
    
    axios.get("http://localhost:5000/stream/getStreamById/"+para)
            .then(res => {
                setStream(res.data);
                
             
             }) .catch(function (error) {
                console.log("error.response.data");              
            })        
        
            
            useEffect(() => {
                
                const queryParams = new URLSearchParams(window.location.search);
                getStream(queryParams.get("id"));
                
                
              },[]);
            
             let iframeurl=""
             let name=""
            if (user)
              name = user["firstName"]+" "+user["lastName"]
             
             //   console.log("name is "+name)
              if (stream && name)
              iframeurl="http://localhost:3001/react-rtc-demo?streamerName="+name+"&meetId="+stream["meetingId"]

              
    const initilindex = { index: 0, isOpen: false }

const [photoIndex, setPhotoIndex] = useState(initilindex)
    return(
        <Layout pathList={['portfolio details', 'full width']} pathTitle="full width">
    <Fragment>
            <section className="portfolio-section port-col zoom-gallery detail-page fullwidth-portfolio">

            <div className="container-fluid blog-sec detail2 p-0">
        <Slider className="owl-carousel owl-theme portfolio-header" {...settings1}>
            <div className="item ml-5">
            <iframe id='showskill' height="900" width="1400" title="Iframe Example" allow="camera; microphone;display-capture;autoplay; clipboard-write;" src={iframeurl}></iframe>
                  </div>
            <div className="item">
                <img alt="" className="img-fluid" src="../assets/images/inner-page/blogs/2.jpg" />
            </div>
        </Slider>
    </div>

                <div className="container-fluid p-t-30 px-0">
                    <div className="row">
                        <Slider className="portfolio-slider col-sm-12" {...settings}>
                            {PortfolioDetail1Data.map((data, i) => {
                                return (
                                    <div className="item" key={i}>
                                        <div className="isotopeSelector">
                                            <div className="overlay">
                                                <div className="border-portfolio">
                                                    <a className="zoom_gallery" data-source={images[photoIndex.index]}
                                                        href={null} title="Into The Blue"  >
                                                        <img alt="" className="img-fluid blur-up lazyload" onClick={() =>
                                                            setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                                                        }
                                                            src={data.img} />

                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                {photoIndex.isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex.index]}
                        nextSrc={images[(photoIndex.index + 1) % images.length]}
                        prevSrc={images[(photoIndex.index + images.length - 1) % images.length]}
                        imageTitle={photoIndex.index + 1 + "/" + images.length}
                        onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                        onMovePrevRequest={onMovePrev}
                        onMoveNextRequest={onMoveNext}
                    />
                )}

                <div className="container m-t-50">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="portfolio-detail">
                                <h3 className="detail-head">project detail</h3>
                                <div className="detail-container d-flex p-t-0">
                                    <div className="portfolio-left">
                                        <h5 className="text-left">client :</h5>
                                    </div>
                                    <div className="portfolio-right">
                                        <h5>john doe</h5>
                                    </div>
                                </div>
                                <div className="detail-container d-flex">
                                    <div className="portfolio-left">
                                        <h5 className="text-left">date :</h5>
                                    </div>
                                    <div className="portfolio-right">
                                        <h5>22 Nov 2019</h5>
                                    </div>
                                </div>
                                <div className="detail-container d-flex">
                                    <div className="portfolio-left">
                                        <h5 className="text-left">link :</h5>
                                    </div>
                                    <div className="portfolio-right">
                                        <h5>www.abcd.com</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-detail">
                                <h3 className="detail-head">about project</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been
                                the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley
                    of type and scrambled it to make a type specimen book.</p>
                                <div className="text-right m-t-10"><a className="btn btn-default primary-btn radius-0" href="#">visit
                    project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- pagination Start --> */}
                <div className="pagination_sec">
                    <div className="content_detail__pagination cdp">
                        <ul>
                            <li><a className="prev" href="#"><i aria-hidden="true" className="fa fa-angle-double-left"></i></a></li>
                            <li><a className="active cdp_i" href="#">1</a></li>
                            <li><a className="cdp_i" href="#">2</a></li>
                            <li><a className="cdp_i" href="#">3</a></li>
                            <li><a className="next" href="#"><i aria-hidden="true" className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- pagination End --> */}
            </section>
        </Fragment>
        </Layout>
    )
}

export default PortfolioDetail2;