import express from "express";
import {
  addProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/get-all", getAllProduct);
router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
export default router;
