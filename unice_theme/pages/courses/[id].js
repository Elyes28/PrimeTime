import React, { useContext, useEffect, useState } from "react";

import "./styleParticipants.css";

import {
  Container,
  Row,
  Col,
  Label,
  Input,
  TabContent,
  TabPane,
  FormGroup,
  ModalHeader,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  Form,
} from "reactstrap";
import CommonLayout from "../../containers/common/common-layout";

import { useRouter } from "next/router";

import Axios, * as others from "axios";

import {
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  Badge,
  CardContent,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { ListGroupItem, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import PopupCoursesTeachers from "../blog/blog-grid/popup-add-teachers-to-courses";

function CoursesDetails(props) {
  const router = useRouter();
  const { id } = router.query;
  const [courses, setCourses] = useState({});
  const [coursesTeachers, setCoursesTeachers] = useState([]);
  const [coursesStudents, setCoursesStudents] = useState([]);
  const [usersss, setUsersss] = useState({});
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("");

  const [newTeacher_id, setNewTeacher_id] = useState("");
  const [coursesList, setCoursesList] = useState([]);
  const [coursesRemoveTeacher, setCoursesRemoveTeacher] = useState([]);
  const [modal, setModal] = useState();
  const [activeTab, setActiveTab] = useState("1");
  /*const listItems = coursesTeachers.map((number) =>
  <li>{number}</li>
  );*/

  const toggle = () => {
    setModal(!modal);
  };

  if (!courses) {
    return <div>course Not Found</div>;
  }

  const getCourse = () => {
    Axios.get(`http://localhost:5000/courses/${id}`).then(async (res) => {
      setCourses(res.data);
    });
  };

  const removeTeacher = (id) => {
    Axios.put(`http://localhost:5000/courses/removeteacherfromcourse/${id}`, {
      teacher_id: newTeacher_id,
      id,
    });
  };

  const getCoursesStudents = async () => {
    Axios.get(
      `http://localhost:5000/courses/retreivecoursestudents/${id}`
    ).then((res) => {
      if (res.data.teachers) {
        setCoursesStudents(res.data.students);
        // console.log(res.data.students);
      }
    });
  };

  const getCoursesTeachers = async () => {
    Axios.get(
      `http://localhost:5000/courses/retreivecourseteachers/${id}`
    ).then((res) => {
      if (res.data.teachers) {
        setCoursesTeachers(res.data.teachers);
        // console.log(res.data.teachers);
      }
    });
  };
  const updateCourses = (id) => {
    Axios.put(`http://localhost:5000/courses/${id}`, {
      name: newName,
      type: newType,

      _id: id,
    }).then((response) => {
      setCoursesList(
        coursesList.map((val) => {
          return val._id === id
            ? { _id: val._id, name: newName, user: newUser, type: newType }
            : val;
        })
      );
    });
  };
  useEffect(() => {
    /* setCourses(coursesListe)


        getCoursesTeachers() */
    updateCourses(id);

    if (id) {
      getCourse();
      getCoursesTeachers();
      getCoursesStudents();
    }
  }, [id]);

  return (
    <CommonLayout
      pathList={["blog", "blog details", "Gallery Layout"]}
      pathTitle="BLOG WITH gallery-layout"
    >
      <section className="agency blog-sec blog-sidebar single_blog_item">
        <Container>
          <ModalBody>
            <div className="modal-body login-modal">
              <Nav
                tabs
                className="nav nav-pills mb-5"
                style={{
                  backgroundImage: `url(
                    "https://png.pngtree.com/background/20210709/original/pngtree-starting-school-summer-vacation-student-training-course-picture-image_921426.jpg")`,
                }}
              >
                <NavItem style={{ marginLeft: "37%" }}>
                  <NavLink
                    className={activeTab == "1" ? "active" : ""}
                    onClick={() => setActiveTab("1")}
                  >
                    Courses Details
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab == "2" ? "active" : ""}
                    onClick={() => setActiveTab("2")}
                  >
                    Participants
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent className="tab-content" activeTab={activeTab}>
                <TabPane
                  tabId="1"
                  aria-labelledby="pills-home-tab"
                  className=""
                  role="tabpanel"
                >
                  {/* <!-- courses details --> */}
                  <Form>
                    <center>
                      <div className="form-row">
                        <FormGroup className="col-md-12">
                          <Label>{courses.name}</Label>
                          <Input
                            style={{ width: "30%" }}
                            className="form-control"
                            placeholder="Name"
                            onChange={(event) => {
                              setNewName(event.target.value);
                            }}
                          />
                        </FormGroup>
                        <FormGroup className="col-md-12">
                          <Label>{courses.type}</Label>
                          <Input
                            style={{ width: "30%" }}
                            className="form-control"
                            placeholder="Type"
                            onChange={(event) => {
                              setNewType(event.target.value);
                            }}
                          />
                        </FormGroup>
                      </div>
                      <button
                        className="btn primary-btn btn-default text-uppercase"
                        onClick={() => {
                          updateCourses(id);
                        }}
                      >
                        Update Courses
                      </button>
                    </center>
                  </Form>
                  {/* <!-- end courses form --> */}{" "}
                </TabPane>
                <TabPane
                  tabId="2"
                  aria-labelledby="pills-profile-tab"
                  className=""
                  role="tabpanel"
                >
                  {/* <!-- participants form --> */}
                  <center>
                    <div class="container">
                      <div class="col-md-12">
                        <div class="m-portlet m-portlet--full-height ">
                          <div class="m-portlet__head">
                            <div class="m-portlet__head-caption">
                              <div class="m-portlet__head-title">
                                <h3 class="m-portlet__head-text">Teachers</h3>
                                <PopupCoursesTeachers  />
                              </div>
                            </div>
                          </div>
                          <div class="m-portlet__body">
                            <div class="tab-content">
                              <div
                                class="tab-pane active"
                                id="m_widget4_tab1_content"
                              >
                                <div class="m-widget4 m-widget4--progress">
                                  <div
                                    style={{
                                      display: "inline-block",
                                      marginLeft: "6%",
                                      marginBottom: "5%",
                                    }}
                                  >
                                   
                                  </div>
                                  {coursesTeachers.map((item, index) => {
                                    return (
                                      <div class="m-widget4__item">
                                        <div class="m-widget4__img m-widget4__img--pic">
                                          <img
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            alt=""
                                          ></img>
                                        </div>
                                        <div class="m-widget4__info">
                                          <span class="m-widget4__title">
                                            {item.firstname}
                                          </span>
                                        </div>
                                        <div class="m-widget4__ext">
                                          <Input
                                            onChange={(e) =>
                                              setNewTeacher_id(e.target.value)
                                            }
                                          />
                                          <button
                                            type="button"
                                            class="btn btn-outline-danger"
                                            style={{
                                              marginLeft: "41px",
                                              marginTop: "1px",
                                            }}
                                          >
                                            <i
                                              class="fa fa-trash"
                                              onClick={() => {
                                                removeTeacher(id);
                                              }}
                                            ></i>
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              <div
                                class="tab-pane"
                                id="m_widget4_tab2_content"
                              ></div>
                              <div
                                class="tab-pane"
                                id="m_widget4_tab3_content"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="container">
                      <div class="col-md-12">
                        <div class="m-portlet m-portlet--full-height ">
                          <div class="m-portlet__head">
                            <div class="m-portlet__head-caption">
                              <div class="m-portlet__head-title">
                                <h3 class="m-portlet__head-text">Students</h3>
                              </div>
                            </div>
                          </div>
                          <div class="m-portlet__body">
                            <div class="tab-content">
                              <div
                                class="tab-pane active"
                                id="m_widget4_tab1_content"
                              >
                                <div class="m-widget4 m-widget4--progress">
                                  {coursesStudents.map((item, index) => {
                                    return (
                                      <div class="m-widget4__item">
                                        <div class="m-widget4__img m-widget4__img--pic">
                                          <img
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            alt=""
                                          ></img>
                                        </div>
                                        <div class="m-widget4__info">
                                          <span class="m-widget4__title">
                                            {item.firstname}
                                          </span>
                                        </div>
                                        <div class="m-widget4__ext">
                                          <button
                                            type="button"
                                            class="btn btn-outline-danger"
                                            style={{
                                              marginLeft: "41px",
                                              marginTop: "1px",
                                            }}
                                          >
                                            <i class="fa fa-trash"></i>
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              <div
                                class="tab-pane"
                                id="m_widget4_tab2_content"
                              ></div>
                              <div
                                class="tab-pane"
                                id="m_widget4_tab3_content"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </center>
                  {/* <!-- end participants form --> */}{" "}
                </TabPane>
              </TabContent>
            </div>
          </ModalBody>
        </Container>
      </section>
    </CommonLayout>
  );
}

/* CoursesDetails.getInitialProps = async (ctx) => { const res = await Axios.get(`http://localhost:5000/courses/${
        ctx.query.id
    }`).then(async () => {
        console.log('test')
    })
    const resTeachers = await Axios.get(`http://localhost:5000/courses/retreivecourseteachers/${
        ctx.query.id
    }`).then(() => {
        console.log('test')

    })

    return {ctx: ctx}


} */

export default CoursesDetails;
