
import React, { useContext } from 'react';

import { Store } from '../utils/Store';
 
import {Container,Row,Col, ListGroup} from 'reactstrap'
import dynamic from 'next/dynamic';
 
 
import CommonLayout from '../containers/common/common-layout';

import axios from 'axios';

 
 
 
import NextLink from 'next/link';
 
import {
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Select,
  MenuItem,
  Button,
  Card,
  List,
  ListItem,
} from '@material-ui/core';

 function CartScreen() {
  const {state,dispatch} = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`http://localhost:5000/products/${item._id}`);
    if (data.stockQuantity < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  return (
    <CommonLayout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
           Cart is empty.{' '}
          <NextLink href="/blog/blog-masonary/masonary-left-sidebar" passHref>
            <Link>Go shopping</Link>
          </NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
          <NextLink href="/blog/blog-masonary/masonary-left-sidebar" passHref>
          <Link>
            <Typography> Go shopping </Typography>
          </Link>
        </NextLink>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                          
                            {item.image}
                            
                           
                             
                          </Link>
                        </NextLink>
                      </TableCell>

                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <div>{item.productName}</div>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">
                      <Select
                          value={item.quantity}
                          onChange={(e) =>
                            updateCartHandler(item, e.target.value)
                          }
                        >
                          {[...Array(item.stockQuantity).keys()].map((x) => (
                            <MenuItem key={x + 1} value={x + 1}>
                              {x + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">${item.price}</TableCell>
                      <TableCell align="right">
                      <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => removeItemHandler(item)}
                        >
                              x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h6">
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button variant="contained" color="primary" fullWidth>
                    Check Out
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </CommonLayout>
  );
}
 export default dynamic(() => Promise.resolve(CartScreen), { ssr: false });