const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const jajanan_pasar_routes = require("./routes/jajanan_pasar.js");
const logsMiddleware = require("./middleware/logs.js");

const app = express();
app.use(logsMiddleware);
app.use(express.json());
app.use("/jajanan_pasar", jajanan_pasar_routes);
app.listen(PORT, () => {
  console.log(`server ready di localhost ${PORT}`);
});
