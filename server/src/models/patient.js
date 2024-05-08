import mongoose from "mongoose";

const PatientSchema=new mongoose.Schema({
    section1ID:{type:mongoose.Schema.Types.ObjectId, ref:"section1"},
    section2ID:{type:mongoose.Schema.Types.ObjectId, ref:"section2"},
    section3ID:{type:mongoose.Schema.Types.ObjectId, ref:"section3"},
    section4ID:{type:mongoose.Schema.Types.ObjectId, ref:"section4"}
});

export const PatientModel=mongoose.model("patient",PatientSchema);
