const express = require("express");
const routes = express.Router();

const EmployeeController = require("./Controllers/EmployeeController");

routes.get("/", (req, res) => {
  return res.status(403).json({ error: "Forbidden!" });
});

routes.get("/employee", EmployeeController.index);
routes.post("/employee", EmployeeController.store);
routes.delete("/employee/:_id", EmployeeController.delete);
routes.put("/employee/:_id", EmployeeController.update);

module.exports = routes;
