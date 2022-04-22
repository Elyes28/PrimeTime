import React, { useState, useEffect } from "react";
import Axios, * as others from "axios";
import _ from "lodash";
import isEqual from "lodash/isEqual";

import { Container, Row, Col } from "reactstrap";
// import Custom Components
import CommonLayout from "../../../containers/common/common-layout";

function ListRightSidebar() {
  const [customization, setCustomList] = useState([]);
  const [recommendation, setRecomList] = useState([]);
  const [recById, setRecById] = useState([]);
  const id = useState("");

  const getRecommendation = () => {
    Axios.get("http://localhost:5000/recommendations/recomAndcustom").then(
      (response) => {
        setRecomList(response.data);
      }
    );
  };

  const getCostumization = () => {
    Axios.get("http://localhost:5000/customizations").then((response) => {
      setCustomList(response.data);
    });
  };
  const getRecById = async (id) => {
    Axios.get(`http://localhost:5000/recommendations/${id}`).then((res) => {
      setRecById(
        recById.filter((val) => {
          return val._id === id;
        })
      );
    });
  };
  useEffect(() => {
    getRecommendation();
  }, []);
  return (
    <>
      <CommonLayout
        pathList={["blog", "blog list view", "right sidebar"]}
        pathTitle="BLOG WITH RIGHT-SIDEBAR"
      >
        <section className="agency blog blog-sec blog-sidebar  blog-list sider">
          <Container>
            {recommendation.map((val, index) => {
              return (
                <>
                  <div
                    style={{
                      overflow: "hidden",
                      display: "block",
                      height: "30%",
                      width: "30%",
                    }}
                  >
                    <p>{val.type}</p>
                    <p>{val.violonBody}</p>
                    <p>{val.violonStick}</p>
                  </div>
                </>
              );
            })}
          </Container>
        </section>
      </CommonLayout>
    </>
  );
}

export default ListRightSidebar;
