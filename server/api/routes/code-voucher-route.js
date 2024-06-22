import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import { getCodeVoucher } from "../controllers/code-voucher.js";

const router = express.Router();

router.get("/get/:id", getCodeVoucher); // Router untuk mendapatkan keranjang by id customer
// router.post("/add", addCart); // Router untuk menambahkan data keranjang
// router.delete("/delete/:id", deleteCart); // Router untuk menghapus data keranjang berdasarkan id

export default router;
