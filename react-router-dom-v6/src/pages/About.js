import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.setItem("isLogin", false);
        navigate("/");
    }
    return(
        <div>
            If you are seeing this you are authentificated 
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default About;