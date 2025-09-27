import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/about/OurStory';
import Careers from './pages/about/Careers';
import Curriculum from './pages/academics/Curriculum';
import Facilities from './pages/academics/Facilities';
import GalleryPage from './components/gallery/GalleryPage';
import CoCurriculum from './pages/academics/CoCurriculum';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/story" element={<OurStory />} />
              <Route path="/about/careers" element={<Careers />} />
              <Route path="/academics/curriculum" element={<Curriculum />} />
              <Route path="/academics/facilities" element={<Facilities />} />
              <Route path="/academics/co-curriculum" element={<CoCurriculum />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;