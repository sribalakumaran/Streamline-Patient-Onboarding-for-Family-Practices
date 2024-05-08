import mongoose from "mongoose";

const section2Schema=new mongoose.Schema({
    A:{ last_name:{type:String },
        first_name:{type:String },
        second_name:{type:String },
        health_number:{type:String },
        code:{type:String },
        dob:{type:Date },
        sex:{type:String },
        relationship:{type:String },
        sameSection1:{type:Boolean},
        mailing_address:{apartment:{type:String},
                        street:{type:String},
                        city:{type:String},
                        postal_code:{type:String}},
        sameSection1Residence:{type:Boolean},
        residence_address:{apartment:{type:String},
                        street:{type:String},
                        city:{type:String},
                        postal_code:{type:String}}
    },
    B:{ last_name:{type:String },
        first_name:{type:String },
        second_name:{type:String },
        health_number:{type:String },
        code:{type:String },
        dob:{type:Date },
        sex:{type:String },
        relationship:{type:String },
        sameSection1:{type:Boolean},
        mailing_address:{apartment:{type:String},
                        street:{type:String},
                        city:{type:String},
                        postal_code:{type:String}},
        sameSection1Residence:{type:Boolean},
        residence_address:{apartment:{type:String},
                        street:{type:String},
                        city:{type:String},
                        postal_code:{type:String}}
        },
        patientID:{type:mongoose.Schema.Types.ObjectId, ref:"patient", required:true}
})

export const Section2Model=mongoose.model("section2",section2Schema);