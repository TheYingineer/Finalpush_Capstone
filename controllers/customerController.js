const { customers } = require("../data/data_customer.js");
const pool = require("../sql/connection");


const getAllCustomers = (req, res) => {
//   res.json(customers);
//   return console.log(customers);

pool.query("SELECT * FROM Yingineering.customer", (err, rows) => { 
    //Yingineering.customer that's the table name from mySQL workbench
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getAllCustomers,
};
