import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from "./components/organisms/Header";
import logoImage from "../src/assets/Screenshot 2025-11-19 203208.png";
import LoginPage from './components/pages/LoginPage';
import BlogPage from './components/pages/Blog';

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
          <Route path='/Blog' element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
