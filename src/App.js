import './App.css';
import Navbar from './components/Navbar/Navbar';
import Alert from './components/alerts/alert';

import TextForm from './components/textform/TextForm';
import { useState } from 'react';

import About from './components/about/about'
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

// import logo from '../assets/logo.svg';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const [color, setColor] = useState('#ff0000')
  const updateColor = (event) => {
    setColor(event.target.value)
    document.body.style.backgroundColor = event.target.value;
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#333';
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils - LightMode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
      document.title = 'TextUtils - DarkMode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title='TextUtils' about='About TextUtils' mode={mode} toggleMode={toggleMode} color={color} updateColor={updateColor} />
        <Alert alert={alert} />
        <div className="container">
          <div className="container my-3">
            <Routes>
              <Route path="" element={<TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
