const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "public")));

app.get("../auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

// Add a route for dashboard.html
app.get("/dashboard.html", (_, res) => {
  // Check if user is authenticated, if not redirect to login
  // Otherwise, serve the dashboard.html
  res.sendFile(join(__dirname, "login.html"));
});

// Add a route for login.html (if needed)
app.get("/login.html", (_, res) => {
  res.sendFile(join(__dirname, "login.html"));
});

// app.get("/*", (_, res) => {
//   res.sendFile(join(__dirname, "login.html"));
// });

process.on("SIGINT", function () {
  process.exit();
});

module.exports = app;
