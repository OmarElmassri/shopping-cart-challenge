const MongoClient = require("mongodb").MongoClient;

async function seedCoupones() {
  const client = new MongoClient("mongodb://127.0.0.1:27017/shopping-cart", {
    useNewUrlParser: true,
  });

  await client.connect();
  console.log("Connected to server");

  const couponCollection = client.db("shopping-cart").collection("coupons");
  await couponCollection.drop();
  console.log("Coupon old collection dropped");

  const couponsData = [
    {
      code: "ABC123P",
      value: 20,
      type: "percentage",
    },
    {
      code: "DEF456V",
      value: 150,
      type: "value",
    },
  ];

  await couponCollection.insertMany(couponsData);
  console.log("DB Seeded Successfully");
  await client.close();
}

seedCoupones()
  .then(() => console.log("Done..."))
  .catch((e) => console.error(e));
