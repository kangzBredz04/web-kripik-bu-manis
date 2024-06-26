import { pool } from "../config/db.js";

export const addCashierProduct = async (req, res) => {
  const { id_product, total_product, price } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO cashier_product (id_product, total_product, price, sub_total) VALUES ($1, $2, $3, $4) RETURNING *",
      [id_product, total_product, price, total_product * price]
    );
    res.status(200).json({ msg: "Success", data: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
