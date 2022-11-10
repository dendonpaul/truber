const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const Connection = require("./db/Connection");
const router = require("./routes/routes");

Connection();

app.use("/api/", router);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
