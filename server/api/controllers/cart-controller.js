import { pool } from "../config/db.js";

// Controller untuk mendapatkan data keranjang berdasarkan id user
export const getCartByIdUser = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT c.id, c.id_product, c.total_product, p.image, p.name, p.price 
      FROM carts c 
      JOIN products p ON c.id_product = p.id WHERE c.id_customer = $1
    `,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
