import React, { useState, useEffect } from "react";
import Axios, * as others from "axios";
import { Container, Row } from "reactstrap";
import NextLink from "next/link";
import { Label, Input, Button } from "reactstrap";
// import Custom Components

import CommonLayout from "../../../containers/common/common-layout";
import CardWrapper from "../../../containers/blog/card/grid-wrapper";
import { BlogsData } from "../../../database/blog/database";
import FormPopup from "../../features/form-popup";
import Popup from "../../features/gallery/popup";
import PopupCourses from "./popup-add-courses";
import StripeContainerCourses from "../../../components/StripeContainerCouses";
function NoSidebar() {
  const [coursesList, setCoursesList] = useState([]);
  const [session, setsession] = useState();
  const [search, setSearch] = useState('');
  const [showItem, setShowItem] = useState(false);
  const getCourses = () => {
    Axios.get("http://localhost:5000/courses").then((response) => {
      if(search.length==0)
      setCoursesList(response.data);
    });
  };

  const deleteCourses = (id) => {
    Axios.delete(`http://localhost:5000/courses/${id}`).then((response) => {
      setCoursesList(
        coursesList.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };

  const searchCourses = () => {
    Axios.get(`http://localhost:5000/courses/searchcourse/`+search).then((response) => {
      if(search.length>0)
      setCoursesList(response.data);
      console.log(search.length)
    });
  };
  useEffect(() => {
    if(search.length==0)
    getCourses();
    setsession(JSON.parse(localStorage.getItem("user")))
    console.log(session)
  },[getCourses()]);

  let deletecourse

 
  
  
  
  return (
    <>
      <CommonLayout
      style='background:url("/assets/images/inner-page/breadcrumbe.jpg")'
        pathList={["blog", "blog grid view", "no sidebar"]}
        pathTitle="Courses"
      >
        <section className="agency blog blog-sec">
          <div>
            <div
              style={{
                display: "inline-block",
                marginLeft: "6%",
                marginBottom: "5%",
              }}
            >
              {
                (typeof window !== 'undefined') 
                ?  localStorage.getItem("user")
                  ?
                  <PopupCourses />
                  : <div></div>


                :  <div></div>
              }
             
            </div>

            <div
              style={{
                width: "19%",
                marginLeft: "46%",
                display: "inline-block",
                padding: "1%",
              }}
            >
              {" "}
              <Input type="text" name="Search" onChange={(event) => {
                              setSearch(event.target.value);
                              console.log(search.length)
                            }}/>
            </div>
            <div style={{ display: "inline-block" }}>
              <Button className="btn btn-default primary-btn radius-0" onClick={searchCourses()}>
                <i class="fa fa-search"></i>
              </Button>
            </div>
          </div>

          
          <Container className="no-side">
            <Row>
              {coursesList.map((val, index) => {
                let source="#"
                if (typeof window !== 'undefined') 
                {
                  if(localStorage.getItem("user"))
                  
                    source="/courses/"+val._id
                }
                return (
                  <>

                    <NextLink href={source} passHref>
                      <div
                        style={{
                          overflow: "hidden",
                          display: "block",
                          height: "30%",
                          width: "30%",
                        }}
                      >
                        <CardWrapper
                          className="col-xl-4 col-md-6"
                          key={`grid-no-sidebar-${index}`}
                          name={val.name}
                          type={val.type}
                          user={val.user}
                          price={val.price}
                          image={"http://localhost:3000/images/users/"+val.teachers[0]+".jpg"}
                        />
                      </div>
                    </NextLink>
                    {


                      localStorage.getItem("user")
                      ?
                        (JSON.parse(localStorage.getItem("user"))._id==val.teachers[0])
                        ?
                        <i
                          class="fa fa-close"
                          style={{
                            height: "1%",
                            width: "1%",
                            paddingRight: "1%",
                          }}
                          onClick={() => {
                            deleteCourses(val._id);
                          }}
                        ></i>
                        : <div></div>

                      : <div></div>






                    }
                    {showItem ? (
				<StripeContainerCourses x={val.price} y={val._id} />
			) : (
				<>
					
					
					<button onClick={() => setShowItem(true)}>  Pay and Join  </button>
				</>
			)}
                  </>
                );
              })}
            </Row>
          </Container>
        </section>{" "}
      </CommonLayout>
    </>
  );
}

export default NoSidebar;
