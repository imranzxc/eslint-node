const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
let db = mongoose.connection



app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/users", (req, res) => {
  res.send("юзер добавлен");
});
app.delete("/users/:id", (req, res) => {
  res.send("юзер с ID :id удален");
});

app.patch("/users/:id", (req, res) => {
  res.send("юзер с ID :id изменен");
});
