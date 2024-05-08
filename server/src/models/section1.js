import mongoose from "mongoose";

const section1Schema=new mongoose.Schema({
    last_name:{type:String,required:true},
    first_name:{type:String,required:true},
    second_name:{type:String,required:true},
    health_number:{type:String,required:true},
    code:{type:String,required:true},
    dob:{type:Date,required:true},
    sex:{type:String,required:true},
    notices:{type:String,required:true},
    email_address:{type:String,required:true},
    mailing_address:{apartment:{type:String,required:true},
                    street:{type:String,required:true},
                    city:{type:String,required:true},
                    postal_code:{type:String,required:true}},
    sameMailing:{type:Boolean},
    residence_address:{apartment:{type:String},
                        street:{type:String},
                        city:{type:String},
                        postal_code:{type:String}},
    patientID:{type:mongoose.Schema.Types.ObjectId, ref:"patient", required:true}
})

export const Section1Model=mongoose.model("section1",section1Schema);