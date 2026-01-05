import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Pages will be created next, keep imports commented or create placeholder files
// Actually I will import them assuming I create them in next steps
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
