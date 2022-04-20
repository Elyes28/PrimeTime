import { Grid, ImageList, List, ListItem, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Card, CardBody, CardText, CardTitle, Col, ListGroup, Row, Table } from 'reactstrap';
import CheckoutSteps from '../../components/CheckoutSteps';
import MessageBox from '../../components/MessageBox';
import CommonLayout from '../../containers/common/common-layout';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

import { Store } from '../../utils/Store';
import NextLink from 'next/link';
import { Link } from 'react-router-dom';



export default function OrderScreen() {
  const { state } = useContext(Store);
  const {cart: {cartItems}, userInfo } = state;

  const router = useRouter();
    const { id: orderId } = router.query

    
   /* const {
      cart: { shippingAddress },
      
    } = state;*/

    const [ order,setOrder] = useState({});
    const [taxPrice,SettaxPrice]=useState();
    const [paymentMethod,SetpaymentMethod]=useState();
    const [shippingAddress,SetshippingAddress]= useState({});
    const [orderItems,SetorderItems]=useState([]);
    const [totalPrice,SettotalPrice]=useState();
    const [itemsPrice,SetitemsPrice]=useState();
    const [shippingPrice,SetshippingPrice]=useState();
    const [isPaid,SetisPaid]=useState();
    const [isDelivered,SetisDelivered]=useState();
    const [deliveredAt,SetdeliveredAt]=useState();
    const [paidAt,SetpaidAt]=useState();
    
    
    
    




  useEffect(() => {
    
    const fetchOrder =  () => {
      try {
       
          Axios.get(`http://localhost:5000/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }).then( res => {
        
          SettaxPrice(res.data.taxPrice);
          SetpaymentMethod(res.data.paymentMethod);
          SetshippingAddress(res.data.shippingAddress);
          SetorderItems(res.data.orderItems);
          console.log(res.data.orderItems);
          SettotalPrice(res.data.totalPrice);
          SetshippingPrice(res.data.shippingPrice)
          SetitemsPrice(res.data.itemsPrice)
          SetisPaid(res.data.isPaid);
          SetisDelivered(res.data.isDelivered)
          SetdeliveredAt(res.data.deliveredAt)
          SetpaidAt(res.data.paidAt);
         });
        
      } catch (err) {
        
      }
    };

    if (!userInfo) {
      return alert("Go To Sign In")
    }
    if (!order._id ||
      successPay ||
      successDeliver ||
      (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [userInfo, orderId]);

  
  return (
    <CommonLayout title={`Order ${orderId}`}>
      <CheckoutSteps activeStep={3}></CheckoutSteps>
      <Typography component="h5" variant="h5">
        Order {orderId}
      </Typography>
      <div>
      <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
           <Card>
              <List>
                <ListItem>
                  <Typography component="h3" variant="h3">
                    Shipping Address
                  </Typography>
                </ListItem>
                <ListItem>
                  {shippingAddress.fullName}, {shippingAddress.address},{' '}
                  {shippingAddress.city}, {shippingAddress.postalCode},{' '}
                  {shippingAddress.country}
                </ListItem>
                <ListItem>
                  Status:{' '}
                  {isDelivered
                    ? `delivered at ${deliveredAt}`
                    : 'not delivered'}
                </ListItem>
              </List>
            </Card>
            <Card>
              <List>
                <ListItem>
                  <Typography component="h3" variant="h3">
                    Payment Method
                  </Typography>
                </ListItem>
                <ListItem>{paymentMethod}</ListItem>
                <ListItem>
                  Status: {isPaid ? `paid at ${paidAt}` : 'not paid'}
                </ListItem>
              </List>
            </Card>
            <Card>
              <List>
                <ListItem>
                  <Typography component="h2" variant="h2">
                    Order Items
                  </Typography>
                </ListItem>
                <Card className="mb-3">
            <CardBody>
              <CardTitle>Items</CardTitle>
              <ListGroup variant="flush">
                {orderItems.map((item) => (
                  <ListItem key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded img-thumbnail"
                        ></img>{' '}
                         
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity}</span>
                      </Col>
                      <Col md={3}>${item.price}</Col>
                    </Row>
                  </ListItem>
                ))}
              </ListGroup>
               
            </CardBody>
          </Card>
              </List>
            </Card>
             
            </Grid>
            <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h3">Order Summary</Typography>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Items Price:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography align="right">${itemsPrice}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Tax:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography align="right">${taxPrice}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Shipping:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography align="right">${shippingPrice}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>
                        <strong>Total:</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography align="right">
                        <strong>${totalPrice}</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Card>
          </Grid>
            </Grid>
            </div>
    
  </CommonLayout>
    
  
     
  );
}
