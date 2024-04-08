const express = require("express");
const {
  registerOrder,
  getAllOrder,
  getOneOrder,
  updateOrder,
  deleteOrder,
} = require("../Controller/OrderController");
const router = express.Router();

//Register Order
router.post("/registerOrder", registerOrder);

//Get One Order
router.post("/gtOne", getOneOrder);

//Get All Orders
router.get("/gtall", getAllOrder);

//Update  Order
router.patch("/updt/:id", updateOrder);

//Delete Order
router.delete("/dlt/:id", deleteOrder);

module.exports = router;
