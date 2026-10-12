import express from "express";
import employeeRouter from "./api/api.js";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello, employees!");
});

app.route("/employee", employeeRouter);

//catch-all error handling middleware
app.use((error, req, res, next) => {
  res.status(500).send("Database error occured");
});

export default app;
