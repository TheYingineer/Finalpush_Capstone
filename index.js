const express = require("express");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const purchaseHistoryRoutes = require("./routes/purchaseHistoryRoutes");
const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// }; // const { customers, trades } = require("./data/data_customer.js");
//customers & trades are two categories that need both controller and routers
const app = express();
app.use(cors()); // Use this after the variable declaration

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(customerRoutes);
app.use(productRoutes);
app.use(purchaseHistoryRoutes);
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello from Index!");
});

app.listen(PORT, () =>
  console.log(`I'm listening on port http://localhost:${PORT}`)
);

//GetAllCustomers
// app.get("customers",(req,res) =>{
//     res.json(customers);
// });
