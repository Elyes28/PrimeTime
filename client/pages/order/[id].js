import { Grid, ImageList, List, ListItem, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Card, CardBody, CardText, CardTitle, Col, ListGroup, Row, Table } from 'reactstrap';
import CheckoutSteps from '../../components/CheckoutSteps';
import MessageBox from '../../components/MessageBox';
import CommonLayout from '../../containers/common/common-layout';

 
import { Store } from '../../utils/Store';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#000",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function OrderScreen() {
  const { state } = useContext(Store);
  const {cart: {cartItems}, userInfo } = state;
  const [success, setSuccess ] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  var c=2.8;
  console.log(c);

  const router = useRouter();
    const { id: orderId } = router.query

    
   /* const {
      cart: { shippingAddress },
      
    } = state;*/
    const [showItem, setShowItem] = useState(false);
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





    const update = async () => {
      const response = await Axios.put(`http://localhost:5000/orders/${orderId}/pay`, {
         
      }) 
      
      if(response.data.success) {
          console.log("paid")
          setSuccess(true)
      }

  }
  const handleSubmit = async (e) => {
      e.preventDefault()
      const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement)
      })


   
       console.log(totalPrice);
          const {id} = paymentMethod
          console.log(id)
          const response = await Axios.post("http://localhost:5000/orders/payment", {
              amount: totalPrice*1000,
              id
          })
          update();

          if(response.data.success) {
              console.log("Successful payment")
              setSuccess(true)
          }

      
  
}
    
    
    
    




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
                {showItem ? (
				<>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
       <div>
           <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
       </div> 
        }
            
        </>
			) : (
				<>
					
					
					<button onClick={() => setShowItem(true)}>Go To pay </button>
				</>
			)}
              </List>
            </Card>
          </Grid>
            </Grid>
            </div>
    
  </CommonLayout>
    
  
     
  );
}