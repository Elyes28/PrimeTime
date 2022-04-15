import React, { Fragment, useEffect,useState } from 'react';
import Layout from '../containers/common/common-layout'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios';
import '../public/assets/person.css'
import StreamCard from '../components/StreamCard';

const PortfolioDetail7 = () => {

  const  [user,setUser]=useState({firstName:"",lastName:""})
    useEffect(() => {
    
        setUser(JSON.parse(localStorage.getItem("user")))       
      }, []);

      const[imgsrc,setImgsrc]=useState("");


      useEffect(()=>{
        
          if (user)
        setImgsrc("images/users/"+user["firstName"]+user["lastName"]+".jpg");
      },[user])
    
    const onInputChange = (e)=>{
        const formData= new FormData()
        formData.append('username',user["firstName"]+user["lastName"]);
    formData.append('photo',e.target.files[0]);
    const config ={
        headers:{
            'content-type':'multipart/form-data',
        }
    }
    axios.post("http://localhost:5000/user/uploadProfileImg",formData,config).then(window.location.reload());

    }
    const imgClicked=(e)=>{e.preventDefault();document.getElementById('file-input').click()}
    

    return(
    <Fragment>
        <Layout pathList={['portfolio details', 'left side image portfolio']} pathTitle="left side image portfolio">
            <section>
                <div className='d-flex' style={{"height":"1080px"}}>
                    <div className='isar w-25 pl-3'>
                        <div className='d-block'>
                    
                        <div className="product-right pro_sticky_info w-100" style={{"margin-right":"50%"}}  data-sticky_column>
                                                <div className="portfolio-detail m-b-20">
                                                    <h3 className="detail-head">Profile detail</h3>
                                                    <input type="file" id="file-input" style={{"overflow":"hidden","height":"0px","width":"0px"}} accept="image/*" onChange={onInputChange}></input>
                                                   <a onClick={imgClicked} className="file-upload"> <img  id="profileimg" alt="" className="img-fluid rounded-circle w-50 " src={imgsrc} style={{"margin-left":"5rem","margin-bottom":"15%"}} /> </a>
                                                    <div className="detail-container d-flex ">
                                                        <div className="portfolio-left">
                                                            <h5 className="text-left">First Name: </h5>
                                                        </div>
                                                        <div className="portfolio-right">
                                                            <h5>{user["firstName"]}</h5>    
                                                        </div>
                                                    </div>

                                                    <div className="detail-container d-flex ">
                                                        <div className="portfolio-left">
                                                            <h5 className="text-left">Last Name: </h5>
                                                        </div>
                                                        <div className="portfolio-right">
                                                            <h5>{user["firstName"]}</h5>    
                                                        </div>
                                                    </div>
                                                    <div className="detail-container d-flex ">
                                                        <div className="portfolio-left">
                                                            <h5 className="text-left">Birthday: </h5>
                                                        </div>
                                                        <div className="portfolio-right">
                                                            <h5>00/00/0000</h5>    
                                                        </div>
                                                    </div>

                                                    <div className="detail-container d-flex ">
                                                        <div className="portfolio-left">
                                                            <h5 className="text-left">Phone: </h5>
                                                        </div>
                                                        <div className="portfolio-right">
                                                            <h5>+216 00000000</h5>    
                                                        </div>
                                                    </div>

                                                    <div className="detail-container d-flex ">
                                                        <div className="portfolio-left">
                                                            <h5 className="text-left">Email: </h5>
                                                        </div>
                                                        <div className="portfolio-right">
                                                            <h5>{user["email"]}</h5>    
                                                        </div>
                                                    </div>

                                                    <div className="detail-container d-flex ">
                                                        <div className="portfolio-left">
                                                            <h5 className="text-left">Role:</h5>
                                                        </div>
                                                        <div className="portfolio-right">
                                                            <h5>Teacher</h5>    
                                                        </div>
                                                    </div>


                                                    <div className="detail-container d-flex ">
                                                        <div className="portfolio-left">
                                                            <h5 className="text-left">expiration:</h5>
                                                        </div>
                                                        <div className="portfolio-right">
                                                            <h5>00/00/0000</h5>    
                                                        </div>
                                                    </div>
                                                   
                                                    
                                                    
                                                </div>
                                                <div className="portfolio-detail">
                                                    <h3 className="detail-head">about project</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been
                                                    the industry's standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley
                                                of type and scrambled it to make a type specimen book.</p>
                                                    <div className="text-right m-t-10"><a className="btn btn-default primary-btn radius-0"
                                                        href="#">visit
                                                project</a>
                                                    </div>
                                                </div>

                                            </div>
                        </div>
                            
                    </div>










                    <div className='imin' style={{"width":"75%","margin-left":"2%" }} >
                    <div className='d-flex' style={{"overflow":"scroll","height":"50%","width":"100%","flex-wrap":"wrap"}}>
                    <StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard />
                    <StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard />
                    <StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard /><StreamCard />
                        
                    </div>

                        <div style={{"overflow":"scroll","height":"50%","width":"100%"}}>test<br></br><br></br><br></br><br></br>tessst</div>
                    </div>

                </div>
            </section>
        </Layout>
    </Fragment>
    )
}

export default PortfolioDetail7;