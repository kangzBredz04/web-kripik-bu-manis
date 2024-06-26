import express from "express";
import { addCashierProduct } from "../controllers/cashier-controller.js";

const router = express.Router();

// router.get("/get-sales-report", getSalesReport);
// router.get("/get-best-product", getBestProduct);
router.post("/add", addCashierProduct);
// router.put("/update/:id", updateCart);
// router.delete("/delete/:id", deleteCart);

export default router;
