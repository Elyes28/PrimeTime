import React from 'react';
import {useEffect, useState} from 'react';
import {Container,Row,Col} from 'reactstrap'
import { MesonryData } from "../../../database/blog/database"
import Masonry from 'react-masonry-css';
import CommonLayout from "../../../containers/common/common-layout"
import CardWrapper from "../../../containers/blog/card/grid-wrapper"
import Categories from "../../../containers/blog/categories"
import PopularPosts from "../../../containers/blog/posts"
import NewsLetter from "../../../containers/blog/newsletter"
import Instagram from "../../../containers/blog/instagram"
import Axios, * as others from "axios";
import Product from "../../../components/Product";
import { Label, Input, Button } from "reactstrap";

import axios from 'axios'






import { Helmet } from 'react-helmet-async';
import PopupCourses from '../../product/addProduct';


const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }

function MasonaryLeftSidebar() {
  
  
  const [productsList, setproductsList] = useState([]);

   const getProducts = () => {
    Axios.get("http://localhost:5000/products").then((response) => {
      setproductsList(response.data);
     // console.log(response.data);
      
    });
  };
  useEffect(() => {
    getProducts();
    },);
    
    return(
        
    <CommonLayout pathList={['instruments', 'books']} pathTitle="SHOP">
        <section className="agency blog blog-sec blog-sidebar">
        
            <Container>
             
                <Row>
                    <Col lg="9"  className="order-lg-2">
                        <div>
                        <div
              style={{
                width: "35%",
                marginLeft: "46%",
                display: "inline-block",
                padding: "5%",
              }}
            >
              {"Search:"}
              <Input type="text" name="Search" />
            </div>
            <div style={{ display: "inline-block" }}>
              <Button className="btn btn-default primary-btn radius-0">
                <i class="fa fa-search"></i>
              </Button>
            </div>
                            <Masonry
                                breakpointCols={2}
                                className="my-masonry-grid masonry-with-dec row"
                                columnClassName="col-md-6 col-12"
                            >
                                {
                                    productsList.map((product) => (
                                        <Col key={product.slug} sm={10} md={10} lg={10} className="mb-1">
                <Product product={product}></Product>
              </Col>
                                        
                                    ) )}
                            </Masonry>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="blog-side">
                          
                            <PopularPosts />
                            <i>
              <PopupCourses/>
            </i>{" "}
                            
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </CommonLayout>
)
                                }

export default MasonaryLeftSidebar;



 