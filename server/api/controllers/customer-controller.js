import argon2 from "argon2";
import { pool } from "../config/db.js";

export const addAccountCustomer = async (req, res) => {
  const { customer_code, username, password, role } = req.body;
  try {
    const hashPassword = await argon2.hash(password);
    const result = await pool.query(
      "INSERT INTO customers (customer_code, username, password) VALUES ($1, $2, $3) RETURNING *",
      [customer_code, username, hashPassword]
    );
    res.status(201).json({
      msg: "Pendaftaran akun telah berhasil",
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllCustomer = async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
