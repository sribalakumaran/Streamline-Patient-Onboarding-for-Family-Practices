import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/section3.css";
export const Section3=()=>{
    const navigate =useNavigate();
    const [section, setSection3]=useState({
        myself:false,
        child:false,
        dependent:false,
        full_name:"",
        homeNo:"",
        workNo:""
    })
    const handleChange=(event)=>{
        const {name,value} = event.target;
        setSection3({...section,[name]:value});
    }
    const handleCheckBoxChange=(event)=>{
        const { name, checked } = event.target;
        setSection3({ ...section, [name]: checked });
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            const patientId = localStorage.getItem('patientId');
            await axios.post(`http://localhost:5000/create/${patientId}/section3`, section);
            navigate("/section4");
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="creat-section">
            <h2>Section 3: Signature</h2>
            <p>I have read and agree to the Patient Commitment, the Consent to Release
                Personal Health Information and the Cancellation Conditions on the back of
                this form. I acknowledge that this Enrolment is not intended to be a legally
                binding contract and is not intended to give rise to any new legal obligations
                between my family doctor and me.</p>
            <div>
                <form onSubmit={onSubmit} className="main-form">
                    <div className="form-group form-inline">
                        <label><input type="checkbox" name="myself" checked={section.myself===true} onChange={handleCheckBoxChange}/>Myself</label>
                        <label><input type="checkbox" name="child" checked={section.child===true} onChange={handleCheckBoxChange}/>Children</label>
                        <label><input type="checkbox" name="dependent" checked={section.dependent===true} onChange={handleCheckBoxChange}/>dependent adult</label>
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" id="full_name" name="full_name" onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Home No</label>
                        <input type="text" id="homeNo" name="homeNo" onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Work No</label>
                        <input type="text" id="workNo" name="workNo" onChange={handleChange}/>
                    </div>

                    <div className="form-group form-buttons">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}