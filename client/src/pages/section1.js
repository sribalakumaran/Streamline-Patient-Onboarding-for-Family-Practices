import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/section1.css";
import axios from 'axios';
export const Section1=()=>{
    const navigate =useNavigate();
    const [section, setSection1]=useState({
        last_name:"",
        first_name:"",
        second_name:"",
        health_number:"",
        code:"",
        sex:null,
        dob:"",
        notices:"",
        email_address:"",
        mapartment: "",
        mstreet: "",
        mcity: "",
        mpostal_code:"",
        sameMailing:false,
        rapartment: "",
        rstreet: "",
        rcity: "",
        rpostal_code:""

    })
    const handleChange=(event)=>{
        const {name,value} = event.target;
        setSection1({...section,[name]:value});
    }
    const handleCheckBoxChange=(event)=>{
        const { checked } = event.target;
        if (checked) {
            // If the checkbox is checked, copy the mailing address to the residence address fields
            setSection1({
                ...section,
                sameMailing: checked,
                rapartment: section.mapartment,
                rstreet: section.mstreet,
                rcity: section.mcity,
                rpostal_code: section.mpostal_code
            });
        } else {
            // If the checkbox is unchecked, reset the residence address fields
            setSection1({
                ...section,
                sameMailing: checked,
                rapartment: "",
                rstreet: "",
                rcity: "",
                rpostal_code: ""
            });
        }
    }
    const handleRadioBoxGroupChange=(event)=>{
        const {name, value } = event.target; 
        setSection1({ ...section, [name]: value });
    }
    
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            const patientId = localStorage.getItem('patientId');
            const response=await axios.post(`http://localhost:5000/create/${patientId}/section1`, section);
            const { mailing_address, residence_address } = response.data;

            // Check if mailing_address and residence_address are objects before storing
            const mailingAddressString = JSON.stringify(mailing_address);
            const residenceAddressString = JSON.stringify(residence_address);

            // Store mailing_address and residence_address in local storage
            localStorage.setItem('mailing_address', mailingAddressString);
            localStorage.setItem('residence_address', residenceAddressString);

            navigate("/section2");
        }
        catch(err){
            console.log(err);
        }
    }
    console.log(section);
    return(
        <div className="create-section">
            <h2>Section 1: I want to enrol myself with the family doctor<br/> identified in Section 4</h2>
            <form onSubmit={onSubmit} className="main-form">
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" id="last_name" name="last_name" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" id="first_name" name="first_name" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Second Name</label>
                    <input type="text" id="second_name" name="second_name" onChange={handleChange}/>
                </div>
                
                <div className="form-group">
                    <label>Health Number</label>
                    <input type="text" id="health_number" name="health_number" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Version Code</label>
                    <input type="text" id="code" name="code" onChange={handleChange}/>
                </div>
                {/* Radio group */}
                <div className="form-group form-inline">
                    <label>Sex:</label>
                    <label><input type="radio" value="M" name="sex" checked={section.sex==="M"} onChange={handleRadioBoxGroupChange}/>Male</label>
                    <label><input type="radio" value="F" name="sex" checked={section.sex==="F"} onChange={handleRadioBoxGroupChange}/>Female</label>
                </div>

                <div className="form-group form-inline">
                    <label>Date of Birth:</label>
                    <input type="date" name="dob" value={section.dob} onChange={handleChange}/>
                </div>

                <div className="form-group form-inline">
                    <label>Email Address:</label>
                    <input type="text" id="email_address" name="email_address" onChange={handleChange}/>
                </div>
                {/* RadioBox group */}
                <div className="form-group form-inline">
                    <lable>Send notices from my family doctor's office to me by:</lable><br/>
                    <label><input type="radio" value="Regular Mail" name="notices" checked={section.notices==="Regular Mail"} onChange={handleRadioBoxGroupChange}/>Regular Mail</label>
                    <label><input type="radio" value="email" name="notices" checked={section.notices==="email"} onChange={handleRadioBoxGroupChange}/>Email</label>
                </div>
                
                <div className="form-group mailing-address">
                    <label>Mailing Address</label>
                    <div>
                        <label>Apartment</label>
                        <input type="text" id="mapartment" name="mapartment" onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Street</label>
                        <input type="text" id="mstreet" name="mstreet" onChange={handleChange}/>
                    </div>
                    <div>
                        <label>City/Town</label>
                        <input type="text" id="mcity" name="mcity" onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Postal Code</label>
                        <input type="text" id="mpostal_code" name="mpostal_code" onChange={handleChange}/>
                    </div>
                </div>
                {/* CheckBoxGroup */}
                <div className="form-group form-inline">
                    <label><input type="checkbox" checked={section.sameMailing===true} onChange={handleCheckBoxChange}/>Same as Mailing Address</label>
                </div>
                <div className="form-group residence-address">
                    <label>Residence Address</label>
                    <div>
                        <label>Apartment</label>
                        <input type="text" id="rapartment" name="rapartment" value={section.sameMailing ? section.mapartment : section.rapartment} disabled={section.sameMailing} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Street</label>
                        <input type="text" id="rstreet" name="rstreet" value={section.sameMailing ? section.mstreet : section.rstreet} disabled={section.sameMailing} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>City/Town</label>
                        <input type="text" id="rcity" name="rcity" value={section.sameMailing ? section.mcity : section.rcity} disabled={section.sameMailing} onChange={handleChange}/>
                    </div>
                    <div>
                        <label>Postal Code</label>
                        <input type="text" id="rpostal_code" name="rpostal_code" value={section.sameMailing ? section.mpostal_code : section.rpostal_code} disabled={section.sameMailing} onChange={handleChange}/>
                    </div>
                </div>

                <div className="form-group form-buttons">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}