import express from 'express';
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors())

app.get("/data", (req, res) => {
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});