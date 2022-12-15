const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
    year: {type: Number, required: true},
    color: {type: [String], required: true},
    maxspeed: {type: Number, required: true},
    pulse:{type:Number,required:true}
});

module.exports = mongoose.model("movie", movieSchema);

