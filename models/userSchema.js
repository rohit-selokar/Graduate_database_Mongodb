const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    percentage: Number,
    gender: String,
    university: String,
    isMarried: Boolean
});

const user = mongoose.model("user",userSchema);
module.exports = user;