import './Signup.scss';
import logo3 from '../../assets/images/logo3.png';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:8080/users/signup', { username, password });
            console.log('Signup successful');
            navigate('/login');
        } catch (error) {
            console.error('Signup failed:', error.response.data.error);
        }
    };
    return (
        <>
            <div className="container">
                <img className="logo" src={logo3} alt="Wanderlust header logo"></img>
            </div>
            <div className="background">
                <div className="signup">
                    <div className="signup__container">
                        <h2 className="signup__title">Signup</h2>
                        <input
                            className="signup__input"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className="signup__input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="signup__button" onClick={handleSignup}>Signup</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;