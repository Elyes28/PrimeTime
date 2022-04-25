import React, { useEffect, useState } from "react";
import Layout from "../../containers/common/common-layout";
import StreamCard from "./streamCard";
import axios from "axios";
import Pagination from "../../utils/Pagination";

const PortfolioTitle4Col = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [streamsPerPage, setStreamsPerPage] = useState(12);
  const indexOfLastStream = currentPage * streamsPerPage;
  const indexOfFirstStream = indexOfLastStream - streamsPerPage;
  const [streams, setStreams] = useState([]);
  const currentStreams = streams.slice(indexOfFirstStream, indexOfLastStream);

  const searchStrams = async (e) => {
    let searchedStreams = [...streams];
    console.log(streams);
if(e!=="")
    searchedStreams = searchedStreams.filter((elem) => {
      return elem.firstname.toLowerCase().search(e.toLowerCase())!==-1  || elem.lastname.toLowerCase() == e.toLowerCase()|| elem.role.toLowerCase() == e.toLowerCase();
    });

    console.log("result:", searchedStreams);
  };

  const getStreams = async () =>
    axios
      .get("http://localhost:5000/user/getStreamers")
      .then((res) => {
        setStreams(res.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

  useEffect(() => {
    getStreams();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Layout
      pathList={["portfolio basic", "basic-4 grid with title"]}
      pathTitle="Streams"
    >
      <input onChange={(event) => searchStrams(event.target.value)}></input>
      <StreamCard
        className="col-lg-3 col-md-4 col-sm-6 isotopeSelector"
        title="elyes"
        subTitle="Lorem Ipsum"
        streams={currentStreams}
      />
      <Pagination
        streamsPerPage={streamsPerPage}
        totalStreams={streams.length}
        paginate={paginate}
        currentpage={currentPage}
      ></Pagination>
    </Layout>
  );
};

export default PortfolioTitle4Col;