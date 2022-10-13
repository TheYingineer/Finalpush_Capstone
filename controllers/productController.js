const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error"); // in order to use this line, you must have an error.js under sql folder
const { products } = require("../data/data_availableProduct");

const getAllProduct = (req, res) => {
  // SELECT ALL Address

  pool.query("SELECT * FROM Yingineering.product", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getProductById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  let id = req.params.id;
  let sql = "SELECT * FROM Yingineering.product WHERE ID = ?"; // the "?" is what the user type in, the id here is the product catagory id number
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createProduct = (req, res) => {
  const { id, product_name, product_description, price } = req.body;

  pool.query(
    `INSERT INTO Yingineering.product (
      id,
      product_name,
      product_description,
      price
      ) 
      VALUES("
      ${id}",
      "${product_name}", 
      "${product_description}", 
      "${price}"
      )`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

const updateProductById = (req, res) => {
  

  pool.query( `UPDATE Yingineering.product SET SET ? WHERE id = ${req.params.id}, product_name = ${req.params.product_name}, product_description = ${req.params.product_description}, price = ${req.params.price}`, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(row);
  });
};

//Matt's way:
const deleteProductById = (req, res) => {
  pool.query(
    `DELETE FROM Yingineering.product WHERE id = ${req.params.id}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
