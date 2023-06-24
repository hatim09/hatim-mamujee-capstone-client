import './Signup.scss';
import axios from 'axios';
import { useState } from 'react';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:8080/users/signup', { username, password });
            console.log('Signup successful');
            // Add logic after successful signup
        } catch (error) {
            console.error('Signup failed:', error.response.data.error);
        }
    };
    return (
        <div>
            <h2>Signup</h2>
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
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;