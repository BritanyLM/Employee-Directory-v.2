const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const employeesRouter = require("./employeesRouter");

app.use("/employees", employeesRouter);

app.use((req, res, next) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});

