import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from '../components/navbar/Navbar';

const LoginPage = ({ setAuth, isAuthenticated }) => {
    const [formData, setFormData] = useState(
        { login: "", password: "" }
    )

    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (formData.login === "r" && formData.password === "1") {
            setAuth(true)
            navigate("/MainPage", { replace: true })
        }
    }
    return (
        <>
            <Navbar></Navbar>
            {isAuthenticated ? <div className='alreadyAuth'>
                You are already authenticated in the app!</div> :
                <div className="formBody">
                    <form action="">
                        <label htmlFor="Username">Login</label>
                        <input
                            placeholder='please enter username or E-mail'
                            id="Username"
                            type="text"
                            name="login"
                            onChange={handleChange}
                            value={formData.login}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder='please enter password'
                            id="password"
                            type="text"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                        />
                        <button onClick={handleSubmit}>Log in</button>
                    </form>
                    <hr></hr>
                    <div className='createAcc'> Don't have an account? <Link to="/">Create an account</Link></div>
                </div>
            }
        </>
    );
};

export default LoginPage;