const express = require("express");
const {
    getAllProduct,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
  } = require("../controllers/productController");
// const { checkJwt } = require('../middleware')
const router = express.Router();

router.get("/products", getAllProduct);

router.get("/product/:id", getProductById);

router.post("/product", createProduct);

router.put("/product/:id", updateProductById);

router.delete("/product/:id", deleteProductById);

module.exports = router;
