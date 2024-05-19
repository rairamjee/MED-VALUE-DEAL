import './App.css';
import AppNavbar from './Components/Navbar/ResponsiveNavbar';
import Medicine from './Components/Medicine/Medicine';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Singup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Surgeries from './Components/Surgeries/Surgeries'
import { auth } from './firebase';
import React, { useEffect, useState } from 'react';

function App() {
  const [username, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  // Conditionally render routes based on the presence of username
  const renderRoutes = () => {
    if (username) {
      return (
        <Routes>
          <Route path="/Signup" element={<Singup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Medicine" element={<Medicine />} />
          <Route path="/MedRush" element={<Surgeries />} />
        </Routes>
      );
    } else {
      return (
        //Dont route anthing here note it
        <Routes>
          <Route path="/Signup" element={<Singup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      );
    }
  };

  return (
    <Router>
      <div className="App">
        <AppNavbar name={username} />
        {renderRoutes()}
      </div>
    </Router>
  );
}

export default App;
