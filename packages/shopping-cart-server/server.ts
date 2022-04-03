import express from 'express';
import cors from 'cors';
import './config/db';
import bodyParser from 'body-parser';
// Routers import
import CartRouter from './services/cart';
import CouponRouter from './services/coupon';

const app = express();
const port = 3001;

// App properties
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// App endpoints
app.use('/cart', CartRouter);
app.use('/coupon', CouponRouter);

app.get("/data", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});