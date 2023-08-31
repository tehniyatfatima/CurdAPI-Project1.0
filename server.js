// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = 5000;

// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello, world!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });
const express = require('express');
const app = express();


app.use(express.json());
const PORT =  5000;


app.get("/", (req, res) => {
  res.send(" hello tehniyat Fatima");
});


app.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});
