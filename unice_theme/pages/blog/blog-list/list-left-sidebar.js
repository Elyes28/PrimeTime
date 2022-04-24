import { Container, Row, Col } from "reactstrap";
// import Custom Components
import CommonLayout from "../../../containers/common/common-layout";
import NextLink from "next/link";
import React, { useState, useEffect } from "react";
import Axios, * as others from "axios";
function ListLeftSidebar() {
  const [recommendationList, setRecomList] = useState([]);

  const getRecommendation = () => {
    Axios.get(
      "http://localhost:5000/products/recomAndcustom/" +
        JSON.parse(localStorage.getItem("user"))["_id"]
    ).then((response) => {
      console.log(response);
      setRecomList(response.data);
    });
  };

  useEffect(() => {
    if (localStorage.getItem("user")) getRecommendation();
  }, []);
  return (
    <div>
      <h5 className="blog-title">Recommendation</h5>
      <div className="sidebar-container">
        <div className="post-container d-flex">
          {recommendationList.map((product) => (
            <div className="w-35 m-r-25">
              <NextLink href={`/product/${product.slug}`} passHref>
                <img alt="" className="img-fluid" src={product.image} />
              </NextLink>
              <div className="badge">{product.type}</div>
              <div className="badge">{product.productName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListLeftSidebar;
