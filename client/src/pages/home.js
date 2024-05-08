import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Home=()=>{
    const navigate=useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/create/");
            const patientId = response.data.patientId;
            localStorage.setItem('patientId', patientId);
            navigate("/section1")
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <br></br>
                <div className="form-group form-buttons">
                    <button type="submit">Enter Family onboarding details</button>
                </div>
            </form>
        </div>
    )
}