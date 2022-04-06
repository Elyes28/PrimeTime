import React, { useEffect } from "react";
import Header from "./header";
import Breadcrumb from "./breadcrumb";
import Footer from "./footer";

const CommonLayout = ({ children, pathList, pathTitle }) => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000");
    document.body.style.setProperty("--secondary", "#000");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000");
  });

  return (
    <>
      <Header className="dark agency" />

      <img
        style={{ width: "100%", marginTop: "4%" }}
        src={
          "https://static.vecteezy.com/system/resources/previews/002/294/136/large_2x/online-training-web-banner-design-free-vector.jpg"
        }
      ></img>

      <>{children}</>

      <Footer />
    </>
  );
};

export default CommonLayout;
