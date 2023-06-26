import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Attractions from './components/Attractions/Attractions';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Bucketlist from './components/Bucketlist/Bucketlist';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('working');
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      {isLoggedIn && <Header />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isLoggedIn ? (
          <>
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/bucketlist" element={<Bucketlist />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
      {isLoggedIn && <Footer />}
    </BrowserRouter>
  );
}

export default App;
