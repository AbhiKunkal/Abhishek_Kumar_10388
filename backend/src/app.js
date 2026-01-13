const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use("/tasks", taskRoutes);


app.use("/users", userRoutes);


app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;

