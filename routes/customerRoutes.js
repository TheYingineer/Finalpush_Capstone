const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  getCustomerById,
  showCustomerPurchaseHistory,
  createCustomer,
  updateCustomerById,
  deleteCustomerById,
} = require("../controllers/customerController");

router.get("/customers", getAllCustomers); 
// http://localhost:5000/customers
router.get("/customer/:id", getCustomerById);
// http://localhost:5000/customer/3
router.get("/customerpurchasehistory/:id", showCustomerPurchaseHistory);

router.post('/customer', createCustomer)

router.put('/customer/:id', updateCustomerById)
router.delete('/customer/:id', deleteCustomerById)

module.exports = router;
