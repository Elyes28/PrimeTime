import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";

const CardGridWrapper = ({ name, type, user, image }) => {
  const MAX_LENGTH = 130;

  return (
    <div>
      <div className="blog-agency">
        <div className="blog-contain">
          <center style={{ backgroundColor: "#E6E6FA" }}>
            <img
              style={{
                height: "40%",
                width: "40%",
                flex: 1,
                flexDirection: "row",
                borderRadius: "50%",
              }}
              alt=""
              className="img-fluid"
              src={
                "http://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png"
              }
            />
          </center>
          <div className="img-container">
            <div>
              <div
                className="blog-info"
                style={{
                  minHeight: "137px",
                  maxHeight: "137px",
                }}
              >
                <div className="m-b-20">
                  <div className="center-text"></div>{" "}
                  <h5 className="blog-head font-600">{name}</h5>
                  <h6 className="m-r-25 font-blog">{type}</h6>
                  <p className="para2">{user}</p>
                </div>

                <div className="btn-bottom m-t-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardGridWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default CardGridWrapper;
