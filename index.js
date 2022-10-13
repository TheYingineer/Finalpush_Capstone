const express = require("express");
const app = express();
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes")
// const { customers, trades } = require("./data/data_customer.js");
//customers & trades are two categories that need both controller and routers

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(customerRoutes);
app.use(productRoutes);

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
