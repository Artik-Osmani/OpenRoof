import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from "./components/organisms/Header";
import logoImage from "../src/assets/Screenshot 2025-11-19 203208.png";
import LoginPage from './components/pages/LoginPage';
import Blog from './components/pages/Blog';
import Properties from './components/pages/Properties';

  return (
    <div className="App">
      <Router>
        <Header
          src={logoImage}
          alt="Company Logo"
          homeUrl="/"
          aboutUrl="/about"
          blogUrl='/blog'
          propertiesUrl="/properties"
          logInUrl='/logIn'
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Properties' element={<Properties />} />
          <Route path='/LogIn' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );


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
