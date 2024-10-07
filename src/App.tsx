// App.tsx
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSite from "./routes/login/login.tsx";
import RegisterSite from "./routes/register/register.tsx";
import WelcomeSite from "./routes/welcome/welcome.tsx";
import Site404 from "./routes/404/404.tsx";
import Panel from "./routes/panel/panel.tsx";

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
