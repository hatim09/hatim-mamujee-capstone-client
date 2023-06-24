import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Attractions from './components/Attractions/Attractions';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Bucketlist from './components/Bucketlist/Bucketlist';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Attractions />} />
    <Route path='/bucketlist' element={<Bucketlist />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
