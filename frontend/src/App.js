import './App.css';
import AppNavbar from './Components/Navbar/ResponsiveNavbar';
import Footer from './Components/Footer/Footer';
import Medicine from './Components/Medicine/Medicine';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Surgeries from './Components/Surgeries/Surgeries';
import HomePage from './Components/Home/Home';
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

  const location = useLocation();

  // Conditionally render routes based on the presence of username
  const renderRoutes = () => {
    if (!username ||username) {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Medicine" element={<Medicine />} />
          <Route path="/MedRush" element={<Surgeries />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      );
    }
  }


  const shouldHideNavbarAndFooter = location.pathname === '/Login' || location.pathname === '/Signup';
  return (
    <div className="App">
      {!shouldHideNavbarAndFooter && <AppNavbar name={username} />}
      {renderRoutes()}
      {!shouldHideNavbarAndFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
