const mongoose = require('mongoose');
//create player shema
const teamSchema = mongoose.Schema(
    {
        name: String,
        owner: String,
        foundation: Number,
        players: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Player"
            }
        ]
    }
);
//affect model name to shema
const team = mongoose.model("Team", teamSchema);
//make import 
module.exports = team;
