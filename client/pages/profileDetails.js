import React, { Fragment, useEffect, useState } from "react";
import Layout from "../containers/common/common-layout";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import "../public/assets/person.css";
import StreamCard from "../components/StreamCard";
import CourseCard from "../components/CourseCard";
import Link from "next/link";

const PortfolioDetail7 = () => {
  const [expires, setExpires] = useState("");
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const [recordedStreams, setRecordedStreams] = useState([]);
  const getRecordedStreams = async () =>
    axios
      .get(
        "http://localhost:5000/stream/getStreamByName/" +
          JSON.parse(localStorage.getItem("user"))["firstName"] +
          " " +
          JSON.parse(localStorage.getItem("user"))["lastName"]
      )
      .then((res) => {
        setRecordedStreams(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  const [courses, setCourses] = useState([]);
  const getCourses = async () =>
    axios
      .get(
        "http://localhost:5000/user/getCoursesByUserId/" +
          JSON.parse(localStorage.getItem("user"))["_id"]
      )
      .then((res) => {
        setCourses(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  const [channeldescription, setChannelDescription] = useState({
    userid: "",
    text: "",
  });
  const [imgsrc, setImgsrc] = useState("");
  const [userData, setUserData] = useState({
    userid: "",
    firstname: "",
    lastname: "",
    phonenumber: "",
    facebook: "",
    instagram: "",
    youtube: "",
    spotify: "",
  });

  useEffect(() => {
    if (user) {
      setImgsrc("images/users/" + user["_id"] + ".jpg");
      if (JSON.parse(localStorage.getItem("user"))["role"] != "user")
        setExpires(
          JSON.parse(localStorage.getItem("user"))["expiration"].split("T")[0]
        );
      setUserData({
        userid: user["_id"],
        firstname: user["firstName"],
        lastname: user["lastName"],
        phonenumber: user["phone"],
        facebook: user["facebook"],
        instagram: user["instagram"],
        youtube: user["youtube"],
        spotify: user["spotify"],
      });
      setChannelDescription({
        userid: user["_id"],
        text: user["channelDescription"],
      });
      getCourses();
      getRecordedStreams();
    }
  }, [user]);

  const onInputChange = (e) => {
    const formData = new FormData();
    formData.append("username", user["_id"]);
    formData.append("photo", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:5000/user/uploadProfileImg", formData, config)
      .then(window.location.reload());
  };
  const imgClicked = (e) => {
    e.preventDefault();
    document.getElementById("file-input").click();
  };
  const [editabledesc, setEditabledesc] = useState(false);
  const onOffEditdesc = () => {
    setEditabledesc(!editabledesc);
  };
  const [editable, setEditable] = useState(false);
  const onOffEdit = () => {
    setEditable(!editable);
  };
  const sendUpdateRequest = () => {
    console.log(userData);
    axios
      .post("http://localhost:5000/user/updateProfile", userData)
      .then(() => {
        user.firstName = userData.firstname;
        user.lastName = userData.lastname;
        user.phone = userData.phonenumber;
        user.facebook = userData.facebook;
        user.instagram = userData.instagram;
        user.youtube = userData.youtube;
        user.spotify = userData.spotify;
        setEditable(!editable);
        // setUser(user)
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendChannelDescription = () => {
    console.log(channeldescription);
    axios
      .post(
        "http://localhost:5000/user/updateChannelDescription",
        channeldescription
      )
      .then(() => {
        user.channelDescription = channeldescription.text;

        setEditabledesc(!editabledesc);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecord= (meetid)=>{
    
    axios.get('http://localhost:5000/stream/fetchSessions/'+meetid).then((res)=>{ window.location.href=res.data.data[0].file.fileUrl})
    
  }

  return (
    <Fragment>
      <Layout
        pathList={["portfolio details", "left side image portfolio"]}
        pathTitle="left side image portfolio"
      >
        <section>
          <div className="d-flex" style={{ height: "1080px" }}>
            <div className="isar w-25 pl-3">
              <div className="d-block">
                <div
                  className="product-right pro_sticky_info w-100"
                  style={{ "margin-right": "50%" }}
                  data-sticky_column
                >
                  <div className="portfolio-detail">
                    <div className="d-flex w-100 justify-content-between">
                      <h3 className="detail-head">Profile detail</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                        onClick={onOffEdit}
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </div>
                    <div className="mb-3">
                      <input
                        type="file"
                        id="file-input"
                        style={{
                          overflow: "hidden",
                          height: "0px",
                          width: "0px",
                        }}
                        accept="image/*"
                        onChange={onInputChange}
                      ></input>
                      <a onClick={imgClicked} className="w-100 pb-3">
                        <img
                          id="profileimg"
                          alt="add profile image"
                          className="rounded-circle w-50 mx-auto "
                          src={imgsrc}
                          style={{ display: "block" }}
                        />{" "}
                      </a>
                    </div>
                    {editable ? (
                      <>
                        <div className="detail-container d-flex mt-3 ">
                          <div className="portfolio-left">
                            <h5 className="text-left">First Name: </h5>
                          </div>
                          <div className="portfolio-right">
                            <input
                              value={userData.firstname}
                              className="border border-dark rounded w-75"
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  firstname: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>

                        <div className="detail-container d-flex ">
                          <div className="portfolio-left">
                            <h5 className="text-left">Last Name: </h5>
                          </div>
                          <div className="portfolio-right">
                            <input
                              value={userData.lastname}
                              className="border  border-dark rounded w-75"
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  lastname: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>

                        <div className="detail-container d-flex ">
                          <div className="portfolio-left">
                            <h5 className="text-left">Phone: </h5>
                          </div>
                          <div className="portfolio-right">
                            <input
                              type="number"
                              value={userData.phonenumber}
                              className="border  border-dark rounded w-75"
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  phonenumber: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>

                        <div className="detail-container d-flex ">
                          <div className="portfolio-left">
                            <h5 className="text-left">facebook: </h5>
                          </div>
                          <div className="portfolio-right">
                            <input
                              type="text"
                              value={userData.facebook}
                              className="border  border-dark rounded w-75"
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  facebook: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>

                        <div className="detail-container d-flex ">
                          <div className="portfolio-left">
                            <h5 className="text-left">instagram: </h5>
                          </div>
                          <div className="portfolio-right">
                            <input
                              type="text"
                              value={userData.instagram}
                              className="border  border-dark rounded w-75"
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  instagram: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>

                        <div className="detail-container d-flex ">
                          <div className="portfolio-left">
                            <h5 className="text-left">youtube: </h5>
                          </div>
                          <div className="portfolio-right">
                            <input
                              type="text"
                              value={userData.youtube}
                              className="border  border-dark rounded w-75"
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  youtube: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>

                        <div className="detail-container d-flex ">
                          <div className="portfolio-left">
                            <h5 className="text-left">Spotify: </h5>
                          </div>
                          <div className="portfolio-right">
                            <input
                              type="text"
                              value={userData.spotify}
                              className="border  border-dark rounded w-75"
                              onChange={(e) =>
                                setUserData({
                                  ...userData,
                                  spotify: e.target.value,
                                })
                              }
                            ></input>
                          </div>
                        </div>
                        <div className="text-center my-3">
                          <a
                            className="btn btn-default primary-btn radius-0"
                            onClick={sendUpdateRequest}
                          >
                            update
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="detail-container d-flex mt-3 ">
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
                            <h5>{user["lastName"]}</h5>
                          </div>
                        </div>

                        <div className="detail-container d-flex ">
                          <div className="portfolio-left">
                            <h5 className="text-left">Phone: </h5>
                          </div>
                          <div className="portfolio-right">
                            <h5>+216 {user["phone"]}</h5>
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
                            <h5>{user["role"]}</h5>
                          </div>
                        </div>

                        {user["role"] != "user" ? (
                          <div className="detail-container d-flex ">
                            <div className="portfolio-left">
                              <h5 className="text-left">expiration:</h5>
                            </div>
                            <div className="portfolio-right">
                              <h5>{expires}</h5>
                            </div>
                          </div>
                        ) : null}
                      </>
                    )}
                  </div>
                  {user["role"] == "musician" ? (
                    <div className="portfolio-detail m-t-10">
                      <div className="d-flex w-100 justify-content-between">
                        <h3 className="detail-head">My Channel description</h3>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                          onClick={onOffEditdesc}
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </div>
                      {!editabledesc ? (
                        <p>{user["channelDescription"]}</p>
                      ) : (
                        <>
                          <textarea
                            className="w-100"
                            value={channeldescription.text}
                            onChange={(e) =>
                              setChannelDescription({
                                ...channeldescription,
                                text: e.target.value,
                              })
                            }
                          ></textarea>
                          <div className="text-center m-t-10">
                            <a
                              className="btn btn-default primary-btn radius-0"
                              onClick={sendChannelDescription}
                            >
                              update
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="imin" style={{ width: "75%", "margin-left": "2%" }}>
              {user["role"] == "musician" ? (
                <Link href="/streams/launchStream">Go live</Link>
              ) : null}

              <div
                className="d-flex"
                style={{
                  overflow: "scroll",
                  height: "50%",
                  width: "100%",
                  "flex-wrap": "wrap",
                }}
              >
                {courses.map((course) => {
                  return <CourseCard course={course} />;
                })}
              </div>

              <div style={{ overflow: "scroll", height: "50%", width: "100%" }}>
                <div className="d-flex">
                  <div style={{ width: "40%" }}>
                    <h2 className="mb-3">my recordings</h2>
                    <div className=" mr-3  border border-2 sandou9elrecordes">
                      {recordedStreams.map((recordedstream) => {
                        let date=recordedstream.created_at.split('T')
                        
                        return (
                          
                          <div className="d-flex justify-content-between" onClick={()=>getRecord(recordedstream.meetingId)} >
                            <span className="h5 m-2">{recordedstream.streamTitle}</span>
                            <span className="m-2">{date[0]}</span>
                          </div>
                          
                        );
                      })}
                    </div>
                  </div>

                  <div
                    
                    style={{ width: "55%" }}
                  >
                    <h2 className="mb-3">stats</h2>
                    <div className=" mr-3 border border-2 sandou9elstats">
                    hello
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};

export default PortfolioDetail7;
