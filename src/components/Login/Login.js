import './Login.scss';
import logo3 from '../../assets/images/logo3.png';
import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';

const Login = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setLoggedInUser } = useContext(UserContext);

    const handleLogin = async () => {
        try {
            await axios
            .post('http://localhost:8080/users/login', { username, password })
            .then(response => {
                console.log(response);
                // const { token } = response.data;

                // localStorage.setItem('token', token);

                const loggedInUser = response.data.username;
                setLoggedInUser(loggedInUser);

                console.log('Login successful');
                onLogin();
                navigate('/attractions');
            })
        } catch (error) {
            console.error('Login failed:', error.response.data.error);
        }
    };

    return (
        <>
            <div className="container">
                <img className="logo" src={logo3} alt="Wanderlust header logo"></img>
            </div>
            <div className="background">
                <div className="login">
                    <h2 className="login__title">Login</h2>
                    <input
                        className="login__input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="login__input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login__button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    );
};

export default Login;