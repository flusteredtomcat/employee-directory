import express from "express";
import employees from "./db/employees.js";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello, employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const { name } = req.params;

  let randomEmployee = employees[Math.floor(Math.random() * employees.length)];

  if (!randomEmployee) {
    return res.send(`No random employee.`);
  }

  res.send(randomEmployee);
});

app.route(`/employees/:id`).get((req, res) => {
  const { id } = req.params;

  const singleEmployee = employees.find((emp) => emp.id === Number(id));

  if (!singleEmployee) {
    return res.send(`No employees with the id of ${id}`);
  }

  res.send(singleEmployee);
});

export default app;
