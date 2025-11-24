import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from "./components/organisms/Header";
import logoImage from "../src/assets/Screenshot 2025-11-19 203208.png";
import LoginPage from './components/pages/LoginPage';
import Blog from './components/pages/Blog';
import Properties from './components/pages/Properties';
import { UserProvider } from './context/UserContext'; 

function AppContent() {
  return (
    <div className="App">
      <Header
        src={logoImage}
        alt="Company Logo"
        homeUrl="/"
        aboutUrl="/about"
        blogUrl='/blog'
        propertiesUrl="/properties"
        logInUrl='/login'
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/login' element={<LoginPage />} />
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
