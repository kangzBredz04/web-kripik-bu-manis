import express from "express";
import {
  addAccountCustomer,
  getAllCustomer,
} from "../controllers/customer-controller.js";

const router = express.Router();

router.get("/get-all-customer", getAllCustomer);
router.post("/add-account-customer", addAccountCustomer);

export default router;
