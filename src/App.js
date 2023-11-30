import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'react-bootstrap';
import Footer from './components/Footer';
import Resume from './components/Resume';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import Contact from './components/Contact';

function App() {

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Tampilkan toast secara otomatis saat komponen dipasang
    setShowToast(true);

    // Sembunyikan toast setelah beberapa detik (3000ms dalam contoh ini)
    setTimeout(() => {
      setShowToast(false);
    }, 8000);
  }, []);

  return (
    <>

      {/* ======= Mobile nav toggle button ======= */}
      {/* <button type="button" className="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> */}
      <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>
      {/* ======= Header ======= */}
      <header id="header" class="d-flex flex-column justify-content-center">

        <nav id="navbar" class="navbar nav-menu">
          <ul>
            <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>{/* .nav-menu */}

      </header>{/* End Header */}

      {/* ======= Hero Section ======= */}
      <Hero />
      <div className="container mt-5">
        {/* Toast Bootstrap yang ditampilkan secara otomatis */}
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          <Toast.Header>
            <img src="img/logoAtas.png" class="rounded me-2" width={20} />
            <strong className="me-auto">Alfi's Portfolio</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Hello everyone, this portfolio website is still in the development, and will always be updated. Thank You.</Toast.Body>
        </Toast>
      </div>
      {/* End Hero */}

      <main id="main">

        {/* ======= About Section ======= */}
        <About />
        {/* End About Section */}

        {/* ======= Skills Section ======= */}
        <Skills />
        {/* End Skills Section */}

        {/* ======= Resume Section ======= */}
        <Resume />
        {/* End Resume Section */}

        {/* ======= Portfolio Section ======= */}
        <Portfolio />
        {/* End Portfolio Section */}

        {/* ======= Services Section ======= */}

        {/* End Services Section */}

        {/* ======= Contact Section ======= */}
        <Contact />
        {/* End Contact Section */}

      </main>{/* End #main */}

      {/* ======= Footer ======= */}
      <Footer />
      {/* End Footer */}

      <div id="preloader"></div>
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </>
  );
}

export default App;
