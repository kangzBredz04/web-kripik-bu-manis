import express from "express";
import "dotenv/config";

import ProductRoute from "./routes/product-route.js";
import AuthRoute from "./routes/auth-route.js";

const app = express();

app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.use("/product", ProductRoute);
router.use("/auth", AuthRoute);

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
