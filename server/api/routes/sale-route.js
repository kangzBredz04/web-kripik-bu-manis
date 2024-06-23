import express from "express";
import { addSalesCustomer } from "../controllers/sale-controller.js";

const router = express.Router();

// router.get("/get/:id", getCartByIdCustomer); // Router untuk mendapatkan keranjang by id customer
router.post("/add", addSalesCustomer); // Router untuk menambahkan data keranjang
// router.put("/update/:id", updateCart); // Router untuk mengubah data keranjang berdasarkan id
// router.delete("/delete/:id", deleteCart); // Router untuk menghapus data keranjang berdasarkan id

export default router;
