import "../App.css";
import {Link} from "react-router-dom";

export const Navbar=()=>{
    return (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/section1">Section 1</Link>
        <Link to="/section2">Section 2</Link>
        <Link to="/section3">Section 3</Link>
        <Link to="/section4">Section 4</Link>
        <Link to="/generate">Generate PDF</Link>
    </div>
    );
}