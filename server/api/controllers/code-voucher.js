import { pool } from "../config/db.js";

// Controller untuk mendapatkan data keranjang berdasarkan id customer
export const getCodeVoucher = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT * FROM voucher_codes WHERE customer_id = $1
    `,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
