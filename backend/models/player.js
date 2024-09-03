//import mongoose module
const mongoose = require('mongoose');
//create player shema
const playerSchema = mongoose.Schema(
    {
        name: String,
        position: String,
        number: Number,
        age: Number,
        tId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Team" //model Name
        }
    }
);
//affect model name to shema
const player = mongoose.model("Player", playerSchema);
//make import 
module.exports = player;
