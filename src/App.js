import './App.css';

import { LoginContext } from './Contexts/LoginContext';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Components/Navigation';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <div className="App background">
    
    <LoginContext.Provider value = {{ userName, setUserName, setShowProfile }}>
      <Navigation />
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={showProfile ? <Profile/> : <Login />} />
      </Routes>
    </LoginContext.Provider>
    <Footer/>
    </div>
  );
}

export default App;
