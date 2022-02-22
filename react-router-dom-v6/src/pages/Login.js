import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.setItem("isLogin", true);
        navigate("/about");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text"></input>
            <label>Password</label>
            <input type="password"></input>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;