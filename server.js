require("dotenv").config();

const express = require("express");
const hotelRouter = require("./routes/hotel");
const app = express();

const PORT = process.env.PORT;

const logger = (req, res, next) => {
  console.log(`${req.method}: Request received on ${req.url}`);
  next();
};

app.use(logger);
app.use(express.json());
app.use("/hotels", hotelRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});
