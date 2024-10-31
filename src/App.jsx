import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './style/main.scss'; // Import the Sass file

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import Logement from './pages/Logement/Logement'
import About from './pages/About/About'
import NotFound from './pages/Error/Error'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/logements/:id' element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;