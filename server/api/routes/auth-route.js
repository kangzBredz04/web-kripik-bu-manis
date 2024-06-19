import express from "express";
import { verifyToken } from "../middleware/auth-middleware.js";
import {
  getCurrentUser,
  loginAccountAdmin,
  loginAccountCustomer,
  logoutAccount,
  registerAccount,
} from "../controllers/auth-controller.js";

const router = express.Router();

router.get("/my-account", verifyToken, getCurrentUser); // Router untuk mendapatkan data user yang sedang login
router.post("/register", registerAccount); // Router untuk registrasi akun
router.post("/login-customer", loginAccountCustomer); // Router untuk login akun
router.post("/login-admin", loginAccountAdmin); // Router untuk login akun
router.get("/logout", logoutAccount); // Router untuk logout account

export default router;
