import express from "express";
import {
  addProduct,
  getAllProduct,
} from "../controllers/product-controller.js";

const router = express.Router();

router.get("/get-all", getAllProduct);
router.post("/add", addProduct);
export default router;
