import mongoose from "mongoose";

const section3Schema=new mongoose.Schema({
    myself:{type:Boolean},
    child:{type:Boolean},
    dependent:{type:Boolean},
    full_name:{type:String,required:true},
    todaysDate:{type:Date,default: Date.now},
//   signature:{userId: {type: String,required: true},
//              signatureData: {type: String,required: true},
//              timestamp: {type: Date,default: Date.now}
//             },
    homeNo:{type:String,required:true},
    workNo:{type:String,required:true},
    patientID:{type:mongoose.Schema.Types.ObjectId, ref:"patient", required:true}
})

export const Section3Model=mongoose.model("section3",section3Schema);