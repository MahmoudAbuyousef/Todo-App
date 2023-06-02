// * Express
const express = require("express");
const app = express();

// * Helmet
const helmet = require("helmet");
// * Set View Engine "ejs"
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// * Method Override
const methodOverride = require("method-override");
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// * Mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todoapp"), { useNewUrlParser: true, useUrifiedTopology: true };

// * Router
const router = require("./routes/tasksrouter");
app.use("/", router);
app.use("/", helmet());
// * Listen Port 3000
app.listen(3000, () => console.log("Server Started!"));
