import express from 'express';
import cors from 'cors';
import './config/db';
// Routers import
import CartRouter from './services/cart';
import bodyParser from 'body-parser';

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

app.get("/data", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});