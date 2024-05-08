import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from 'axios';
export const Section2=()=>{
    const navigate =useNavigate();
    const [section, setSection2]=useState({
        alast_name:"",
        afirst_name:"",
        asecond_name:"",
        ahealth_number:"",
        acode:"",
        adob:"",
        asex:"",
        arelationship:"",
        amapartment:"",
        amstreet:"",
        amcity:"",
        ampostal_code:"",
        asameSection1:false,
        asameSection1Residence:false,
        arapartment:"",
        arstreet:"",
        arcity:"",
        arpostal_code:"",
        blast_name:"",
        bfirst_name:"",
        bsecond_name:"",
        bhealth_number:"",
        bcode:"",
        bdob:"",
        bsex:"",
        brelationship:"",
        bmapartment:"",
        bmstreet:"",
        bmcity:"",
        bmpostal_code:"",
        bsameSection1:false,
        bsameSection1Residence:false,
        brapartment:"",
        brstreet:"",
        brcity:"",
        brpostal_code:""
    })
    const handleRadioBoxGroupChange=(event)=>{
        const {name, value } = event.target; 
        setSection2({ ...section, [name]: value });
    }
    const handleChange=(event)=>{
        const {name,value} = event.target;
        setSection2({...section,[name]:value});
    }
    
    const handleMailingCheckBoxChange=(event)=>{
        const { checked } = event.target;
        const mailingAddressString = localStorage.getItem("mailing_address");
        const mailing_address = JSON.parse(mailingAddressString);
        if (checked) {
            // If the checkbox is checked, copy the mailing address to the residence address fields
            setSection2({
                ...section,
                asameSection1: checked,
                amapartment: mailing_address.apartment,
                amstreet: mailing_address.street,
                amcity: mailing_address.city,
                ampostal_code: mailing_address.postal_code
            });
        } else {
            // If the checkbox is unchecked, reset the residence address fields
            setSection2({
                ...section,
                asameSection1: checked,
                amapartment: "",
                amstreet: "",
                amcity: "",
                ampostal_code: ""
            });
        }
    }
    const handleBMailingCheckBoxChange=(event)=>{
        const { checked } = event.target;
        const mailingAddressString = localStorage.getItem("mailing_address");
        const mailing_address = JSON.parse(mailingAddressString);
        if (checked) {
            // If the checkbox is checked, copy the mailing address to the residence address fields
            setSection2({
                ...section,
                bsameSection1: checked,
                bmapartment: mailing_address.apartment,
                bmstreet: mailing_address.street,
                bmcity: mailing_address.city,
                bmpostal_code: mailing_address.postal_code
            });
        } else {
            // If the checkbox is unchecked, reset the residence address fields
            setSection2({
                ...section,
                bsameSection1: checked,
                bmapartment: "",
                bmstreet: "",
                bmcity: "",
                bmpostal_code: ""
            });
        }
    }
    const handleResidenceCheckBoxChange=(event)=>{
        const { checked } = event.target;
        const residenceAddressString = localStorage.getItem("residence_address");
        const residence_address = JSON.parse(residenceAddressString);
        if (checked) {
            // If the checkbox is checked, copy the mailing address to the residence address fields
            setSection2({
                ...section,
                asameSection1Residence: checked,
                arapartment: residence_address.apartment,
                arstreet: residence_address.street,
                arcity: residence_address.city,
                arpostal_code: residence_address.postal_code
            });
        } else {
            // If the checkbox is unchecked, reset the residence address fields
            setSection2({
                ...section,
                asameSection1Residence: checked,
                arapartment: "",
                arstreet: "",
                arcity: "",
                arpostal_code: ""
            });
        }
    }
    const handleBResidenceCheckBoxChange=(event)=>{
        const { checked } = event.target;
        const residenceAddressString = localStorage.getItem("residence_address");
        const residence_address = JSON.parse(residenceAddressString);
        if (checked) {
            // If the checkbox is checked, copy the mailing address to the residence address fields
            setSection2({
                ...section,
                bsameSection1Residence: checked,
                brapartment: residence_address.apartment,
                brstreet: residence_address.street,
                brcity: residence_address.city,
                brpostal_code: residence_address.postal_code
            });
        } else {
            // If the checkbox is unchecked, reset the residence address fields
            setSection2({
                ...section,
                bsameSection1Residence: checked,
                brapartment: "",
                brstreet: "",
                brcity: "",
                brpostal_code: ""
            });
        }
    }
    const onSubmit=async(event)=>{
        event.preventDefault();
        try{
            const patientId = localStorage.getItem('patientId');
            await axios.post(`http://localhost:5000/create/${patientId}/section2`, section);
            navigate("/section3");
        }
        catch(err){
            console.log(err);
        }
    }
    console.log(section);
    return(
        <div className="create-section">
            <h2>Section 2: I want to enrol my children under 16 and/or dependent adults <br/>with the family doctor identified in Section 4</h2>
            <form onSubmit={onSubmit} className="main-form">
                <div>
                    <h3>A</h3>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" id="alast_name" name="alast_name" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" id="afirst_name" name="afirst_name" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Second Name</label>
                        <input type="text" id="asecond_name" name="asecond_name" onChange={handleChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Health Number</label>
                        <input type="text" id="ahealth_number" name="ahealth_number" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Version Code</label>
                        <input type="text" id="acode" name="acode" onChange={handleChange}/>
                    </div>
                    {/* Radio group */}
                    <div className="form-group form-inline">
                        <label>Sex:</label>
                        <label><input type="radio" value="Male" name="asex" checked={section.asex==="M"} onChange={handleRadioBoxGroupChange}/>Male</label>
                        <label><input type="radio" value="Female" name="asex" checked={section.asex==="F"} onChange={handleRadioBoxGroupChange}/>Female</label>
                    </div>

                    <div className="form-group form-inline">
                        <label>Date of Birth:</label>
                        <input type="date" name="adob" value={section.adob} onChange={handleChange}/>
                    </div>

                    <div className="form-group form-inline">
                        <label>Relation:</label>
                        <label><input type="radio" value="Parent" name="arelationship" checked={section.arelationship==="Parent"} onChange={handleRadioBoxGroupChange}/>parent</label>
                        <label><input type="radio" value="legal guardian" name="arelationship" checked={section.arelationship==="legal guardian"} onChange={handleRadioBoxGroupChange}/>legal guardian</label>
                        <label><input type="radio" value="attorney for personal care" name="arelationship" checked={section.arelationship==="attorney for personal care"} onChange={handleRadioBoxGroupChange}/>attorney for personal care</label>
                    </div>
                    
                    <div className="form-group form-inline">
                        <label><input type="checkbox" checked={section.asameSection1===true} onChange={handleMailingCheckBoxChange}/>Same as Section1</label>
                    </div>

                    <div className="form-group residence-address">
                        <label>Mailing Address</label>
                            <div>
                                <label>Apartment</label>
                                <input type="text" id="amapartment" name="amapartment" value={section.asameSection1 ? JSON.parse(localStorage.getItem("mailing_address")).apartment : section.amapartment} disabled={section.asameSection1} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Street</label>
                                <input type="text" id="amstreet" name="amstreet" value={section.asameSection1 ? JSON.parse(localStorage.getItem("mailing_address")).street : section.amstreet} disabled={section.asameSection1} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>City/Town</label>
                                <input type="text" id="amcity" name="amcity" value={section.asameSection1 ? JSON.parse(localStorage.getItem("mailing_address")).city : section.amcity} disabled={section.asameSection1} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Postal Code</label>
                                <input type="text" id="ampostal_code" name="ampostal_code" value={section.asameSection1 ? JSON.parse(localStorage.getItem("mailing_address")).postal_code : section.ampostal_code} disabled={section.asameSection1} onChange={handleChange}/>
                            </div>
                    </div>

                    <div className="form-group form-inline">
                        <label><input type="checkbox" checked={section.asameSection1Residence===true} onChange={handleResidenceCheckBoxChange}/>Same as Section1</label>
                    </div>

                    <div className="form-group residence-address">
                        <label>Residence Address</label>
                            <div>
                                <label>Apartment</label>
                                <input type="text" id="arapartment" name="arapartment" value={section.asameSection1Residence ? JSON.parse(localStorage.getItem("residence_address")).apartment : section.arapartment} disabled={section.asameSection1Residence} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Street</label>
                                <input type="text" id="arstreet" name="arstreet" value={section.asameSection1Residence ? JSON.parse(localStorage.getItem("residence_address")).street : section.arstreet} disabled={section.asameSection1Residence} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>City/Town</label>
                                <input type="text" id="arcity" name="arcity" value={section.asameSection1Residence ? JSON.parse(localStorage.getItem("residence_address")).city : section.arcity} disabled={section.asameSection1Residence} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Postal Code</label>
                                <input type="text" id="arpostal_code" name="arpostal_code" value={section.asameSection1Residence ? JSON.parse(localStorage.getItem("residence_address")).postal_code : section.arpostal_code} disabled={section.asameSection1Residence} onChange={handleChange}/>
                            </div>
                    </div>

                </div>

                <div>
                    <h3>B</h3>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" id="blast_name" name="blast_name" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" id="bfirst_name" name="bfirst_name" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Second Name</label>
                        <input type="text" id="bsecond_name" name="bsecond_name" onChange={handleChange}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Health Number</label>
                        <input type="text" id="bhealth_number" name="bhealth_number" onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Version Code</label>
                        <input type="text" id="bcode" name="bcode" onChange={handleChange}/>
                    </div>
                    {/* Radio group */}
                    <div className="form-group form-inline">
                        <label>Sex:</label>
                        <label><input type="radio" value="Male" name="bsex" checked={section.bsex==="M"} onChange={handleRadioBoxGroupChange}/>Male</label>
                        <label><input type="radio" value="Female" name="bsex" checked={section.bsex==="F"} onChange={handleRadioBoxGroupChange}/>Female</label>
                    </div>

                    <div className="form-group form-inline">
                        <label>Date of Birth:</label>
                        <input type="date" name="bdob" value={section.bdob} onChange={handleChange}/>
                    </div>

                    <div className="form-group form-inline">
                        <label>Relation:</label>
                        <label><input type="radio" value="Parent" name="brelationship" checked={section.brelationship==="Parent"} onChange={handleRadioBoxGroupChange}/>parent</label>
                        <label><input type="radio" value="legal guardian" name="brelationship" checked={section.brelationship==="legal guardian"} onChange={handleRadioBoxGroupChange}/>legal guardian</label>
                        <label><input type="radio" value="attorney for personal care" name="brelationship" checked={section.brelationship==="attorney for personal care"} onChange={handleRadioBoxGroupChange}/>attorney for personal care</label>
                    </div>
                    
                    <div className="form-group form-inline">
                        <label><input type="checkbox" checked={section.bsameSection1===true} onChange={handleBMailingCheckBoxChange}/>Same as Section1</label>
                    </div>

                    <div className="form-group residence-address">
                        <label>Mailing Address</label>
                            <div>
                                <label>Apartment</label>
                                <input type="text" id="bmapartment" name="bmapartment" value={section.bsameSection1 ? JSON.parse(localStorage.getItem("mailing_address")).apartment : section.bmapartment} disabled={section.bsameSection1} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Street</label>
                                <input type="text" id="bmstreet" name="bmstreet" value={section.bsameSection1 ? JSON.parse(localStorage.getItem("mailing_address")).street : section.bmstreet} disabled={section.bsameSection1} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>City/Town</label>
                                <input type="text" id="bmcity" name="bmcity" value={section.bsameSection1 ? JSON.parse(localStorage.getItem("mailing_address")).city : section.bmcity} disabled={section.bsameSection1} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Postal Code</label>
                                <input type="text" id="bmpostal_code" name="bmpostal_code" value={section.bsameSection1 ? JSON.parse(localStorage.getItem("mailing_address")).postal_code : section.bmpostal_code} disabled={section.bsameSection1} onChange={handleChange}/>
                            </div>
                    </div>

                    <div className="form-group form-inline">
                        <label><input type="checkbox" checked={section.bsameSection1Residence===true} onChange={handleBResidenceCheckBoxChange}/>Same as Section1</label>
                    </div>

                    <div className="form-group residence-address">
                        <label>Residence Address</label>
                            <div>
                                <label>Apartment</label>
                                <input type="text" id="brapartment" name="brapartment" value={section.bsameSection1Residence ? JSON.parse(localStorage.getItem("residence_address")).apartment : section.brapartment} disabled={section.bsameSection1Residence} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Street</label>
                                <input type="text" id="brstreet" name="brstreet" value={section.bsameSection1Residence ? JSON.parse(localStorage.getItem("residence_address")).street : section.brstreet} disabled={section.bsameSection1Residence} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>City/Town</label>
                                <input type="text" id="brcity" name="brcity" value={section.bsameSection1Residence ? JSON.parse(localStorage.getItem("residence_address")).city : section.brcity} disabled={section.bsameSection1Residence} onChange={handleChange}/>
                            </div>
                            <div>
                                <label>Postal Code</label>
                                <input type="text" id="brpostal_code" name="brpostal_code" value={section.bsameSection1Residence ? JSON.parse(localStorage.getItem("residence_address")).postal_code : section.brpostal_code} disabled={section.bsameSection1Residence} onChange={handleChange}/>
                            </div>
                    </div>
                </div>
                <div className="form-group form-buttons">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}