import { Grid, ImageList, List, ListItem, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Card, CardBody, CardText, CardTitle, Col, ListGroup, Row, Table } from 'reactstrap';
import CheckoutSteps from '../../components/CheckoutSteps';
import MessageBox from '../../components/MessageBox';
import CommonLayout from '../../containers/common/common-layout';

import { Store } from '../../utils/Store';
import NextLink from 'next/link';
import { Link } from 'react-router-dom';



export default function OrderScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const router = useRouter();
    const { id: orderId } = router.query

    
    const {
      cart: { shippingAddress },
      
    } = state;

  const [ order,setOrder] = useState([{}]);

  const {
    
    paymentMethod,
    orderItems,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    isPaid,
    isDelivered,
    deliveredAt,
    paidAt,
  } = order;



  useEffect(() => {
    const fetchOrder =  () => {
      try {
       
          Axios.get(`http://localhost:5000/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }).then( res => {
          setOrder(res.data);
          
          
         
         });
        
      } catch (err) {
        
      }
    };

    if (!userInfo) {
      return alert("Go To Sign In")
    }
    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, userInfo, orderId]);

  useEffect(() => {
    console.log(order);
  },[order])
  return (
    <CommonLayout title={`Order ${orderId}`}>
      <CheckoutSteps activeStep={3}></CheckoutSteps>
      <Typography component="h5" variant="h5">
        Order {orderId}
      </Typography>
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
                <ListItem>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {orderItems?
                         orderItems.map(item => {
                          <TableRow key={item._id}>
                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                  ></Image>
                                </Link>
                              </NextLink>
                            </TableCell>

                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Typography>{item.name}</Typography>
                                </Link>
                              </NextLink>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{item.quantity}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>${item.price}</Typography>
                            </TableCell>
                          </TableRow>
                        })
                        : "Loading..."}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ListItem>
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
    
  </CommonLayout>
    
  
     
  );
}