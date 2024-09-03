//import mongoss module
const mongoose=require('mongoose');
//create match shema
const matchSchema=mongoose.Schema(
    {
        //atr:type
        scoreOne:Number,
        scoreTwo:Number,
        teamOne:String,
        teamTwo:String,

    }
);
//affect model name to shema
const match = mongoose.model("Match",matchSchema);
//make import 
module.exports=match;