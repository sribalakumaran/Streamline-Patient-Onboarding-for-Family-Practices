import mongoose from "mongoose";

const section4Schema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    postal_code:{type:String,required:true},
    todaysDate:{type:Date,default: Date.now},
//   signature:{userId: {type: String,required: true},
//              signatureData: {type: String,required: true},
//              timestamp: {type: Date,default: Date.now}
//             },
    patientID:{type:mongoose.Schema.Types.ObjectId, ref:"patient", required:true}
})

export const section4Model=mongoose.model("section4",section4Schema);