import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navbar } from '../components/navbar/Navbar';

const LoginPage = ({ setAuth }) => {
    const [user, setUser] = useState(
        { login: "", password: "" }
    )

    const navigate = useNavigate()

    const handleChange = (event) => {
        setUser(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (user.login === "r" && user.password === "1") {
            setAuth(true)
            navigate("/MainPage", { replace: true })
        }
    }

    console.log(user)

    return (
        <>
            <Navbar></Navbar>
            <div className="login__body">
                <form action="">
                    <label htmlFor="Username">Login</label>
                    <input
                        id="Username"
                        type="text"
                        name="login"
                        onChange={handleChange}
                        value={user.login}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={user.password}
                    />
                    <button onClick={handleSubmit}>Log in</button>
                </form>
            </div>
        </>
    );
};

export default LoginPage;