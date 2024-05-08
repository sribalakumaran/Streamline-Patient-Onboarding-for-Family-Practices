import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/section4.css";
export const Section4=()=>{
    const navigate=useNavigate();
    const [section, setSection4]=useState({
        name:"",
        address:"",
        postal_code:""
    })
    const handleChange=(event)=>{
        const {name,value} = event.target;
        setSection4({...section,[name]:value});
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            const patientId = localStorage.getItem('patientId');
            await axios.post(`http://localhost:5000/create/${patientId}/section4`, section);
            navigate("/generate");
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="create-section">
            <h2>Section 4: Family doctor information</h2>
            <form onSubmit={onSubmit} className="main-form">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" id="name" name="name" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" id="address" name="address" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Postal Code</label>
                    <input type="text" id="postal_code" name="postal_code" onChange={handleChange}/>
                </div>
                <div className="form-group form-buttons">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}