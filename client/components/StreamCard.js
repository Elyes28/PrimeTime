function StreamCard(props){


    return( 
    <a href="#">
    <div className="col-lg-3 col-md-4 col-sm-6 isotopeSelector" key="1">
        <div className="overlay">
            <div className="border-portfolio">
                <div className="zoom_gallery" 
                    title="aaa">
                    <div className="overlay-background"
                    >
                        <i aria-hidden="true" className="fa fa-play"></i>
                        
                    </div>
                    <img alt="" className=" blur-up lazyload"
                        src="images/users/testzztestz.jpg"
                        style={{width:"100%",height:"170px"}}/>
                    

                </div>
            </div>

        </div>
        
            <div className="portfolio-text">
                <h3 className="head-text">
                    "ilyes"
                </h3>
                <h6 className="head-sub-text">
                   Live
                </h6>
            </div>
    </div>
    </a>)
}

export default StreamCard;