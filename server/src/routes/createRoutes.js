import express from "express";
import { Section1Model } from "../models/section1.js";
import { PatientModel } from "../models/patient.js";
import { Section2Model } from "../models/section2.js";
import mongoose from "mongoose";
import { Section3Model } from './../models/section3.js';
import { section4Model } from './../models/section4.js';

const createRoutes=express.Router();

createRoutes.post("/",async(req,res)=>{
    try{
        const newPatient=new PatientModel({});
        await newPatient.save();
        res.json({patientId:newPatient._id});
    }
    catch(err){
        console.log(err);
    }
})

createRoutes.post("/:patientID/section1",async(req,res)=>{
    try{
        const {last_name,first_name,second_name,health_number,code,dob,sex,notices,email_address,mapartment,mstreet,mcity,mpostal_code,sameMailing,rapartment,rstreet,rcity,rpostal_code}=req.body;
        console.log(req.body);
        const patientID=req.params.patientID;
        const newSection1=new Section1Model({last_name:last_name,first_name:first_name,second_name:second_name,health_number:health_number,
            code:code,dob:dob,sex:sex,notices:notices,email_address:email_address,
            mailing_address: {
            apartment: mapartment,
            street: mstreet,
            city: mcity,
            postal_code: mpostal_code
        },
        sameMailing:sameMailing,
        residence_address: {
            apartment: rapartment,
            street: rstreet,
            city: rcity,
            postal_code: rpostal_code
        },
        patientID:patientID
        });
        const sec1id=newSection1._id;
        await newSection1.save();
        await PatientModel.findOneAndUpdate({_id:patientID},{$set:{section1ID:sec1id}},{new:true})
        res.json({mailing_address:{apartment: mapartment,street: mstreet,city: mcity,postal_code: mpostal_code},residence_address:{apartment: rapartment,street: rstreet,city: rcity,postal_code: rpostal_code}});

    }catch(err){
        console.log(err)
    }
})

createRoutes.post("/:patientID/section2",async(req,res)=>{
    try{
        const {alast_name,afirst_name,asecond_name,ahealth_number,acode,adob,asex,arelationship,amapartment,amstreet,amcity,ampostal_code,asameSection1,asameSection1Residence,arapartment,arstreet,arcity,arpostal_code,
            blast_name,bfirst_name,bsecond_name,bhealth_number,bcode,bdob,bsex,brelationship,bmapartment,bmstreet,bmcity,bmpostal_code,bsameSection1,bsameSection1Residence,brapartment,brstreet,brcity,brpostal_code}=req.body;
        const patientID=req.params.patientID;
        const newSection2=new Section2Model({
            A:{ last_name:alast_name,
                first_name:afirst_name,
                second_name:asecond_name,
                health_number:ahealth_number,
                code:acode,
                dob:adob,
                sex:asex,
                relationship:arelationship,
                sameSection1:asameSection1,
                mailing_address:{apartment:amapartment,
                                street:amstreet,
                                city:amcity,
                                postal_code:ampostal_code},
                sameSection1Residence:asameSection1Residence,
                residence_address:{apartment:arapartment,
                                street:arstreet,
                                city:arcity,
                                postal_code:arpostal_code}
            },
            B:{ last_name:blast_name,
                first_name:bfirst_name,
                second_name:bsecond_name,
                health_number:bhealth_number,
                code:bcode,
                dob:bdob,
                sex:bsex,
                relationship:brelationship,
                sameSection1:bsameSection1,
                mailing_address:{apartment:bmapartment,
                                street:bmstreet,
                                city:bmcity,
                                postal_code:bmpostal_code},
                sameSection1Residence:bsameSection1Residence,
                residence_address:{apartment:brapartment,
                                street:brstreet,
                                city:brcity,
                                postal_code:brpostal_code}
                },
            patientID:patientID
        })

        const sec2id=newSection2._id;
        await newSection2.save();
        await PatientModel.findOneAndUpdate({_id:patientID},{$set:{section2ID:sec2id}},{new:true})
        res.json({message:"New section2 added to the database and Updated the Patient record"});
    }
    catch(err){
        console.log(err)
    }
})

createRoutes.post("/:patientID/section3",async(req,res)=>{
    try{
        const {myself,child,dependent,full_name,homeNo,workNo}=req.body;
        const patientID=req.params.patientID;
        const newSection3=new Section3Model({
            myself:myself,
            child:child,
            dependent:dependent,
            full_name:full_name,
            homeNo:homeNo,
            workNo:workNo,
            patientID:patientID
        })
        const sec3id=newSection3._id;
        await newSection3.save();
        await PatientModel.findOneAndUpdate({_id:patientID},{$set:{section3ID:sec3id}},{new:true})
        res.json({message:"New section3 added to the database and Updated the Patient record"});
    }
    catch(err){
        console.log(err)
    }
})

createRoutes.post("/:patientID/section4",async(req,res)=>{
    try{
        const {name,address,postal_code}=req.body;
        const patientID=req.params.patientID;
        const newSection4=new section4Model({
            name:name,
            address:address,
            postal_code:postal_code,
            patientID:patientID
        })
        const sec4id=newSection4._id;
        await newSection4.save();
        await PatientModel.findOneAndUpdate({_id:patientID},{$set:{section4ID:sec4id}},{new:true})
        res.json({message:"New section3 added to the database and Updated the Patient record"});
    }
    catch(err){
        console.log(err)
    }
})

export {createRoutes};