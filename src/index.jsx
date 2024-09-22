import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/abstract/_global.scss'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import LogementDetail from './pages/LogementDetails/LogementDetails';
import Error from './pages/Error/Error'

// Créez une racine (root) avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utilisez la méthode render sur la nouvelle racine
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<LogementDetail/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

