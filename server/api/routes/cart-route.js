import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  getCartByIdCustomer,
  addCart,
  //   deleteCart,
  //   updateCart,
} from "../controllers/cart-controller.js";

const router = express.Router();

router.get("/get/:id", getCartByIdCustomer); // Router untuk mendapatkan keranjang by id customer
router.post("/add", addCart); // Router untuk menambahkan data keranjang
// router.put("/update/:id", verifyToken, updateCart); // Router untuk mengubah data keranjang berdasarkan id
// router.delete("/delete/:id", verifyToken, deleteCart); // Router untuk menghapus data keranjang berdasarkan id

export default router;
