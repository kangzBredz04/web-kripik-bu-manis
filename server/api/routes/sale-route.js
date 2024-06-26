import express from "express";
import {
  addSalesCustomer,
  getBestProduct,
  getSalesReport,
} from "../controllers/sale-controller.js";

const router = express.Router();

router.get("/get-sales-report", getSalesReport);
router.get("/get-best-product", getBestProduct);
router.post("/add", addSalesCustomer);
// router.put("/update/:id", updateCart);
// router.delete("/delete/:id", deleteCart);

export default router;
