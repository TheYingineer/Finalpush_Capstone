const express = require("express");
const purchaseHisotryController = require("../controllers/puchaseHistoryController");
// const { checkJwt } = require('../middleware')
const router = express.Router();

router.get("/purchasehistory", purchaseHisotryController.getAllPurchaseHistory);

router.get("/purchasehistory/:id", purchaseHisotryController.getPurchaseHistoryByID);

router.post("/purchasehistory", purchaseHisotryController.createPurchaseHistory);

router.put("/purchasehistory/:id", purchaseHisotryController.updatePurchasHistoryByID);

router.delete("/purchasehistory/:id", purchaseHisotryController.deletePurchaseHistorybyID);

module.exports = router;
