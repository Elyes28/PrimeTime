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

function NoSidebar() {
  const [coursesList, setCoursesList] = useState([]);
  const [session, setsession] = useState();

  const getCourses = () => {
    Axios.get("http://localhost:5000/courses").then((response) => {
      setCoursesList(response.data);
    });
  };
  useEffect(() => {
    getCourses();
    setsession(JSON.parse(localStorage.getItem("user")));
    console.log(session);
  }, [getCourses()]);

  const deleteCourses = (id) => {
    Axios.delete(`http://localhost:5000/courses/${id}`).then((response) => {
      setCoursesList(
        coursesList.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };
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
              <PopupCourses />
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
              <Input type="text" name="Search" />
            </div>
            <div style={{ display: "inline-block" }}>
              <Button className="btn btn-default primary-btn radius-0">
                <i class="fa fa-search"></i>
              </Button>
            </div>
          </div>

          {useEffect}
          <Container className="no-side">
            <Row>
              {coursesList.map((val, index) => {
                return (
                  <>
                    <NextLink href={`/courses/${val._id}`} passHref>
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
                        />
                      </div>
                    </NextLink>
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
                    ></i>{" "}
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
