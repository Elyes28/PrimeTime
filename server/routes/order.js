import express from 'express';
const router= express.Router();
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/order.js';
import cors from 'cors';

router.use(cors());

 


router.post( '/',async(req, res) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.body.user,
      
     
    });
    try{
      const order = await newOrder.save();
      console.log(order);
      res.status(201).send({ message: 'New Order Created', order });
  }catch(err){
      res.send('Error')
  }
    
    
  })

  router.get( '/:id',async(req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
     
       
export default router;