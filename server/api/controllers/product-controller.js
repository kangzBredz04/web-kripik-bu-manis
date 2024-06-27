import { pool } from "../config/db.js";

// Controller untk mendapatkan semua data produk
export const getAllProduct = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO products (name,  description, price, stock, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.stock,
        req.body.image,
      ]
    );
    res.json({
      product: result.rows[0],
      message: "Produk berhasil ditambahkan.",
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
