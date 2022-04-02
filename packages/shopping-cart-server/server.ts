import express from 'express';
import cors from 'cors';
import './config/db';
// Routers import
import CartRouter from './services/cart';

const app = express();
const port = 3001;

// App properties
app.use(cors())

// App endpoints
app.use('/cart', CartRouter);

app.get("/data", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});