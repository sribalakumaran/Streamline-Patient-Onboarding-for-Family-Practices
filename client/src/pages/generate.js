import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from 'axios';
export const Generate=()=>{
    const navigate=useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const patientId = localStorage.getItem('patientId');
            await axios.get(`http://localhost:5000/generate/${patientId}`);
            navigate("/")
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <br></br>
                <div className="form-group form-buttons">
                    <button type="submit">Generate PDF</button>
                </div>
            </form>
        </div>
    )
}