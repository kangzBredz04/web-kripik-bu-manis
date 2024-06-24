import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  addAccountUser,
  getAllUser,
  getCurrentUser,
  loginAccountAdmin,
  loginAccountCustomer,
  logoutAccount,
  registerAccount,
  updateUser,
} from "../controllers/auth-controller.js";

const router = express.Router();

router.get("/my-account", verifyToken, getCurrentUser);
router.post("/register", registerAccount);
router.post("/login-customer", loginAccountCustomer);
router.post("/login-admin", loginAccountAdmin);
router.get("/logout", logoutAccount);
router.get("/get-all-user", getAllUser);
router.put("/update-user/:id", updateUser);
router.post("/add-account-user", addAccountUser);

export default router;
