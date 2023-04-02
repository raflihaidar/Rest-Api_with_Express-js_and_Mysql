const express = require("express");
const mysql = require("mysql");
const port = 8000;
const jajanan_pasar_routes = require("./routes/jajanan_pasar.js");
const logsMiddleware = require("./middleware/logs.js");

const app = express();
app.use(logsMiddleware);
app.use(express.json());
app.use("/jajanan_pasar", jajanan_pasar_routes);

app.listen(port, () => {
  console.log("server ready");
});
