// App.tsx
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSite from './routs/login/login.tsx';
import RegisterSite from './routs/register/register.tsx';
import WelcomeSite from './routs/welcome/welcome.tsx';
import Site404 from './routs/404/404.tsx';
import Panel from './routs/panel/panel.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeSite />} />
        <Route path="*" element={<Site404 />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/login" element={<LoginSite />} />
        <Route path="/register" element={<RegisterSite />} />
      </Routes>
    </Router>
  );
}

export default App;