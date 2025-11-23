import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from "./components/organisms/Header";
import logoImage from "../src/assets/Screenshot 2025-11-19 203208.png";
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header
          src={logoImage}
          alt="Company Logo"
          homeUrl="/"
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/LogIn' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
