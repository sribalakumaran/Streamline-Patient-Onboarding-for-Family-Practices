import express  from 'express';
import { PatientModel } from '../models/patient.js';
import { PDFDocument } from 'pdf-lib';
import {readFile,writeFile} from 'fs/promises';
import { log } from 'console';
import { Section1Model } from '../models/section1.js';
import { Section2Model } from '../models/section2.js';
import { Section3Model } from '../models/section3.js';
import { section4Model } from '../models/section4.js';

const generateRoutes=express.Router();

generateRoutes.get("/:patientID",async(req,res)=>{
    try{
        const patientID=req.params.patientID;
        const patient=await PatientModel.findOne({_id:patientID});

        const input = "./PDF/input.pdf";
        const pdfDoc=await PDFDocument.load(await readFile(input));

        const form = pdfDoc.getForm();
        const fields = form.getFields();

        //Section1
        const sec1=await Section1Model.findOne({_id:patient.section1ID});

        form.getTextField("Last name of adult submitting form").setText(sec1.last_name);
        form.getTextField("First Name of adult submitting form").setText(sec1.first_name);
        form.getTextField("Second Name of adult patient").setText(sec1.second_name);
        form.getTextField("Health Number").setText(sec1.health_number);
        form.getTextField("Code").setText(sec1.code);

        const year = sec1.dob.getFullYear();
        const month = String(sec1.dob.getMonth() + 1).padStart(2, '0');
        const day = String(sec1.dob.getDate()).padStart(2, '0');
        const dateString = `${year}${month}${day}`;
        form.getTextField("Date of Birth 1").setText(dateString);

        const radioGroup = form.getRadioGroup('Sex');
        radioGroup.select(sec1.sex);
        
        const radioGroup1 = form.getRadioGroup('Notices');
        radioGroup1.select(sec1.notices);

        form.getTextField("Email Address of adult submitting form").setText(sec1.email_address);
        form.getTextField("Apartment No. (Mailing address)").setText(sec1.mailing_address.apartment);
        form.getTextField("Street (Mailing address)").setText(sec1.mailing_address.street);
        form.getTextField("CityTown (Mailing address)").setText(sec1.mailing_address.city);
        form.getTextField("Postal Code (Mailing address)").setText(sec1.mailing_address.postal_code);

        const differentCheckbox = form.getCheckBox('Different residential address');
        if(sec1.sameMailing){
            differentCheckbox.check();
        }
        else{
            differentCheckbox.uncheck();
        }

        form.getTextField("Apartment (Residential address)").setText(sec1.residence_address.apartment);
        form.getTextField("Street (Residential address)").setText(sec1.residence_address.street);
        form.getTextField("CityTown (Residential address)").setText(sec1.residence_address.city);
        form.getTextField("Postal code (Residential address)").setText(sec1.residence_address.postal_code);
        
        //Section2
        //A
        const sec2=await Section2Model.findOne({_id:patient.section2ID});
        if(sec2.A.last_name){
            form.getTextField("Last Name A").setText(sec2.A.last_name);
            form.getTextField("First Name_A").setText(sec2.A.first_name);
            form.getTextField("Second Name_A").setText(sec2.A.second_name);
            form.getTextField("Health Number_A").setText(sec2.A.health_number);
            form.getTextField("Version code_A").setText(sec2.A.code);

            const yearA = sec2.A.dob.getFullYear();
            const monthA = String(sec2.A.dob.getMonth() + 1).padStart(2, '0');
            const dayA = String(sec2.A.dob.getDate()).padStart(2, '0');
            const dateStringA = `${yearA}${monthA}${dayA}`;
            form.getTextField("Date of Birth yyyymmdd_2").setText(dateStringA);

            const radioGroupA = form.getRadioGroup('Sex_A');
            radioGroupA.select(sec2.A.sex);   
            
            const radioGroupA1=form.getRadioGroup('Relationship A');
            radioGroupA1.select(sec2.A.relationship);

            const sameSectionResidenceCheckbox = form.getCheckBox("Same Mailing_A");
            if(sec2.A.sameSection1){
                sameSectionResidenceCheckbox.check();
            }
            else{
                sameSectionResidenceCheckbox.uncheck();
            }

            form.getTextField("Apartment Mailing A").setText(sec2.A.mailing_address.apartment);
            form.getTextField("Street Mailing A").setText(sec2.A.mailing_address.street);
            form.getTextField("CityTown_Mailing_A").setText(sec2.A.mailing_address.city);
            form.getTextField("Postal Code_A").setText(sec2.A.mailing_address.postal_code);

            const sameSectionMailingCheckbox=form.getCheckBox("Same Residence_A");
            if(sec2.A.sameSection1Residence){
                sameSectionMailingCheckbox.check();
            }
            else{
                sameSectionMailingCheckbox.uncheck();
            }

            form.getTextField("Apartment_Residence_A").setText(sec2.A.residence_address.apartment);
            form.getTextField("Street_Residence_A").setText(sec2.A.residence_address.street);
            form.getTextField("CityTown_Residence_A").setText(sec2.A.residence_address.city);
            form.getTextField("Postal Code_Residence_A").setText(sec2.A.residence_address.postal_code);
        }
        //B
        if(sec2.B.last_name){
            form.getTextField("Last Name B").setText(sec2.B.last_name);
            form.getTextField("First Name_B").setText(sec2.B.first_name);
            form.getTextField("Second Name_B").setText(sec2.B.second_name);
            form.getTextField("Health Number_B").setText(sec2.B.health_number);
            form.getTextField("Version code_B").setText(sec2.B.code);

            const yearB = sec2.B.dob.getFullYear();
            const monthB = String(sec2.B.dob.getMonth() + 1).padStart(2, '0');
            const dayB = String(sec2.B.dob.getDate()).padStart(2, '0');
            const dateStringB = `${yearB}${monthB}${dayB}`;
            form.getTextField("Date_of_Birth_B").setText(dateStringB);

            const radioGroupB = form.getRadioGroup('Sex_B');
            radioGroupB.select(sec2.B.sex);   
            
            const radioGroupB1=form.getRadioGroup('Relationship B');
            radioGroupB1.select(sec2.B.relationship);

            const sameSectionResidenceCheckboxB = form.getCheckBox("Same Mailing B");
            if(sec2.B.sameSection1){
                sameSectionResidenceCheckboxB.check();
            }
            else{
                sameSectionResidenceCheckboxB.uncheck();
            }

            form.getTextField("Apartment Mailing B").setText(sec2.B.mailing_address.apartment);
            form.getTextField("Street Mailing B").setText(sec2.B.mailing_address.street);
            form.getTextField("CityTown_Mailing_B").setText(sec2.B.mailing_address.city);
            form.getTextField("Postal_Code_Mailing_B").setText(sec2.B.mailing_address.postal_code);

            const sameSectionMailingCheckboxB=form.getCheckBox("Same Residence B");
            if(sec2.B.sameSection1Residence){
                sameSectionMailingCheckboxB.check();
            }
            else{
                sameSectionMailingCheckboxB.uncheck();
            }

            form.getTextField("Apartment_Residence_B").setText(sec2.B.residence_address.apartment);
            form.getTextField("Street_Residence_B").setText(sec2.B.residence_address.street);
            form.getTextField("CityTown_Residence_B").setText(sec2.B.residence_address.city);
            form.getTextField("Postal Code_Residence_B").setText(sec2.B.residence_address.postal_code);
        }
        //Section3
        const sec3=await Section3Model.findOne({_id:patient.section3ID});
        const childrenCheckbox = form.getCheckBox('children');
        const adultCheckbox = form.getCheckBox('dependent adults');
        const myselfCheckbox = form.getCheckBox('myself');

        if(sec3.myself){
            myselfCheckbox.check();
        }
        if(sec3.child){
            childrenCheckbox.check();
        }
        if(sec3.dependent){
            adultCheckbox.check();
        } 
        
        form.getTextField("Full name").setText(sec3.full_name);

        const year3 = sec3.todaysDate.getFullYear();
        const month3 = String(sec3.todaysDate.getMonth() + 1).padStart(2, '0');
        const day3 = String(sec3.todaysDate.getDate()).padStart(2, '0');
        const dateString3 = `${year3}/${month3}/${day3}`;
        form.getTextField("Date signed").setText(dateString3);

        form.getTextField("Home or Mobile Telephone No").setText(sec3.homeNo);
        form.getTextField("Work Telephone No").setText(sec3.workNo);
        
        //Section4
        const sec4=await section4Model.findOne({_id:patient.section4ID});
        const infoDoc=`${sec4.name}\t${sec4.address}\t${sec4.postal_code}`;
        form.getTextField("Family Doctor Information").setText(infoDoc);

        form.getTextField("Date signed").setText(dateString3);

        //SavingPDF
        const pdfBytes=await pdfDoc.save();
        const output=`./PDF/${sec1.last_name}.pdf`;
        await writeFile(output,pdfBytes);
        res.json({message:"section 1,2,3,4 written in the pdf"});

    }catch(err){
        console.log(err);
    }
    
})

export {generateRoutes};