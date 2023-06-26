import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './components/UserContext';
import axios from 'axios';

// const token = localStorage.getItem('token');
// if (token) {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </React.StrictMode>
  
);


