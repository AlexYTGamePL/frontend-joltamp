// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSite from './site/login';
import RegisterSite from './site/register';

function App() {
  return (
        <Router>

      {/* Definiowanie ścieżek do wyświetlania komponentów */}
      <Routes>
        <Route path="/login" element={<LoginSite />} />
        <Route path="/register" element={<RegisterSite />} />
      </Routes>
    </Router>
  );
}

export default App;
