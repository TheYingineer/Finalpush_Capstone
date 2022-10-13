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
  // UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID>
  let body = req.body; // you must declare the body so that you can get the entire content of the CARS category
  let id = req.params.id; //specially get id from the request parameter

  let sql =
    "UPDATE Yingineering.product SET id =?, product_name = ?, product_description = ?, price = ? WHERE id =?"; // id =? is the condition

  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [
    body.id,
    body.product_name,
    body.product_description,
    body.price,
    id,
  ]);
  //the reason why the id is last is b/c id = condition,
  // here we are using the body is b/c body is the content of the entire Product database, thus, we are using body.user_id, body.phone1, body.phone2, body.email

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
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
