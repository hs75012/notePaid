import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './index.css';
import App from './pages/App';
import About from '.pages/About';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Header/>
         <Router exact path="/">
        <App />
        </Router>
        <Router path="/About">
          <About />
        </Router>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
