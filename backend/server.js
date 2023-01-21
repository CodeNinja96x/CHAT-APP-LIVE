const express = require("express");
const chatsData = require("./data");
const dontenv = require("dotenv");

dontenv.config();
const app = express();
app.get("/api/chats", (req, res) => {
  res.send(chatsData);
});
app.get("/", (req, res) => {
  res.send("API is dancing");
});

app.get("/api/chats/:id", (req, res) => {
  const singleChat = chatsData.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started here ${PORT}`));
