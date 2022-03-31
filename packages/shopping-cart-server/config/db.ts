import { connect, ConnectOptions } from 'mongoose';

/// MongoDB Connection ///
connect("mongodb://127.0.0.1:27017/shopping-cart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log("MongoDB Connection Error: ", err));
