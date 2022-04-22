import React, { useEffect } from "react";
import { BlogsList } from "../../../database/blog/database";
import { Container, Row, Col, Button } from "reactstrap";
import html2canvas from "html2canvas";
import { jsPDF } from "jsPDF";
// import Custom Components
import CommonLayout from "../../../containers/common/common-layout";
import CardWrapper from "../../../containers/blog/card/list-wrapper";

const ListNoSidebar = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#10266b");
    document.body.style.setProperty("--secondary", "#464545");
    document.body.style.setProperty("--light", "#1F357D");
    document.body.style.setProperty("--dark", "#04185B");
    document.getElementById("violon").src = "http://localhost:3001";
  });
  return (
    <>
      <CommonLayout
        pathList={["blog", "blog list view", "no sidebar"]}
        pathTitle="BLOG WITH NO-SIDEBAR"
      >
        <section className="agency blog blog-sec blog-list blog-no-sidebar">
          <Container>
            <div id="pagetodownload">
              <iframe id="violon" height="720" width="1400"></iframe>
            </div>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default ListNoSidebar;
