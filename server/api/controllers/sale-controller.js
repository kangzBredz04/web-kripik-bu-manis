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
    do {
      sales.forEach(async (sale) => {
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
      });
    } while (!sales.length);

    //   for (const sale of sales) {
    //     const { id, id_product, total_product } = sale;
    //     await pool.query(
    //       "INSERT INTO sales (id_customer, id_product, total_product, sub_total, discount, total_sale, type_of_payment, address) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    //       [
    //         id_customer,
    //         id_product,
    //         total_product,
    //         sub_total,
    //         discount,
    //         total_sale,
    //         type_of_payment,
    //         address,
    //       ]
    //     );
    //     await pool.query("DELETE FROM carts WHERE id= $1", [id]);
    //     await pool.query(
    //       "UPDATE products SET stock = (stock - $1) WHERE id = $2",
    //       [total_product, id_product]
    //     );
    //   }
    res.status(200).json({ msg: "Pesanan telah berhasil dibuat" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};
