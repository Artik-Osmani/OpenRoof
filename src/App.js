import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/pages/Home';
import About from '../src/components/pages/About';
import Header from "../src/components/organism/Header";
import SignIn from './components/pages/SignIn';
import logoImage from "../src/assets/Screenshot 2025-11-19 203208.png";

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
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
