const mongoose = require("mongoose");
// * CREATE SCHEMA
const schema = new mongoose.Schema({ title: { type: String, required: true } });
module.exports = mongoose.model("Task", schema);
