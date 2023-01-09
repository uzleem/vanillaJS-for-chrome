import mongoose from "mongoose";

const schema = new mongoose.Schema({
   title : [{  type : String }],
   description : String,
   createAt : String,
   hashtags : [{ type : String}],
   meta : {
    views : Number,
    rating : Number 
   }
});

const videoModel = new mongoose.model("videoModel", schema);

export default videoModel;
