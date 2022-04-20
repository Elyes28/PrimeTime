
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();
import  logger  from "./helpers/logger.js"
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import router from './routes/stream.js';
import  courseRouter  from "./routes/courses.js"
import  productRouter  from "./routes/products.js"
import orderRouter from "./routes/order.js"


const app = express();
app.use(morgan('combined', {
  skip: function (req, res) { return res.statusCode < 400 },
  "stream": logger.stream 

}))

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/stream',router);
app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use("/orders",orderRouter);




app.use('/products',productRouter)






app.use('/courses',courseRouter)



const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => logger.info(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);