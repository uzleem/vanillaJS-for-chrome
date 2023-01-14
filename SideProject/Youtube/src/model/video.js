import mongoose from "mongoose";

const schema = new mongoose.Schema({
   title       : [{  type : String, required : true, trim: true, maxLength: 20 }],
   titleTest   : { type : String, default : "test"},
   description : { type : String, required : true, trim: true, minLength: 20},
   createAt    : {   type : Date, required : true, default : Date.now },
   hashtags    : [{  type : String, trim: true }],
   meta        : [{
      views  :  {type : Number, required : true, default : 0 },
      rating :  {type : Number, required : true, default : 0 } 
                 }]
});

const videoModel = new mongoose.model("videoModel", schema);

export default videoModel;
