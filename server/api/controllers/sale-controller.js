import { pool } from "../config/db.js";

export const addSalesCustomer = async (req, res) => {
  const {
    id_customer,
    sales,
    sub_total,
    discount,
    total_sale,
    type_of_payment,
    address,
  } = req.body;
  try {
    if (sales?.length > 1) {
      for (const sale of sales) {
        const { id, id_product, total_product } = sale;
        await pool.query(
          "INSERT INTO sales (id_customer, id_product, total_product, sub_total, discount, total_sale, type_of_payment, address) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
          [
            id_customer,
            id_product,
            total_product,
            sub_total,
            discount,
            total_sale,
            type_of_payment,
            address,
          ]
        );
        await pool.query("DELETE FROM carts WHERE id= $1", [id]);
        await pool.query(
          "UPDATE products SET stock = (stock - $1) WHERE id = $2",
          [total_product, id_product]
        );
      }
    } else {
      await pool.query(
        "INSERT INTO sales (id_customer, id_product, total_product, sub_total, discount, total_sale, type_of_payment, address) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [
          id_customer,
          sales[0]?.id_product,
          sales[0]?.total_product,
          sub_total,
          discount,
          total_sale,
          type_of_payment,
          address,
        ]
      );
      await pool.query("DELETE FROM carts WHERE id= $1", [sales[0]?.id]);
      await pool.query(
        "UPDATE products SET stock = (stock - $1) WHERE id = $2",
        [sales[0]?.total_product, sales[0]?.id_product]
      );
    }
    res.status(200).json({ msg: "Pesanan telah berhasil dibuat" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

export const getSalesReport = async (_req, res) => {
  try {
    const result = await pool.query(
      `SELECT s.sale_date, c.customer_code, s.sub_total, s.discount, s.total_sale, s.type_of_payment
      FROM sales s
      JOIN customers c ON s.id_customer = c.id`
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
