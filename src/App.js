import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from "./components/organisms/Header";
import logoImage from "../src/assets/Screenshot 2025-11-19 203208.png";
import LoginPage from './components/pages/LoginPage';
import BlogPage from './components/pages/Blog';
import UserDashboard from './components/pages/UserDashboard';
import { UserProvider } from './context/UserContext';
import { useState } from 'react';

function AppContent() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Header
        src={logoImage}
        alt="Company Logo"
        homeUrl="/"
        isLoggedIn={isLoggedIn}
        onLoginSuccess={() => setIsLoggedIn(true)}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/LogIn' element={<LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />} />
        <Route path='/Blog' element={<BlogPage />} />
        <Route path='/dashboard' element={isLoggedIn ? <UserDashboard onLogout={handleLogout} /> : <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}

export default App;
