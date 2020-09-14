const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 4000;

const app = express();
require("dotenv").config();
require("./database/");

const { checkToken } = require("./lib/checkToken");

// Config
const limit = rateLimit({
  max: 100, // max requests
  windowMs: 60 * 60 * 1000, // 1 hour of 'ban' / lockout
  message: "Too many requests", // message to send
});

app.use(cors());
app.use(helmet());
//app.use(limit);
app.use(express.json({ limit: "15kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(xss());
app.use(morgan("dev"));

// Routes
app.use("/api/accounts/admin", require("./routes/admin.routes"));
app.use("/api/students", checkToken, require("./routes/student.routes"));

// Starting server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
