import './Login.scss';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await axios.post('http://localhost:8080/users/login', { username, password });
            console.log('Login successful');
            // Add any necessary logic after successful login
        } catch (error) {
            console.error('Login failed:', error.response.data.error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>

    );
};

export default Login;