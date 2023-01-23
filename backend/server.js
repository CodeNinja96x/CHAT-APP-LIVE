const express = require("express");
const chatsData = require("./data");
const dontenv = require("dotenv");
const connectDB = require("./config/db");
const color = require("colors");
const userRoutes = require("./routes/userRoutes");
dontenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is dancing");
});

app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started here ${PORT}`.yellow.bold));
