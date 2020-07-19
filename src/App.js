import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './home';
import AboutMe from './about';
import Skills from './skills';
import Resume from './resume';
// import PortFolio from './portfolio';
import Contact from './contact';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">
          <ul>
            <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#skills"><i className="bx bx-file-blank"></i> <span>Skills</span></a></li>
            <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            {/* <li><a href="#portfolio"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li> */}
            <li><a href="#contact"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
         </nav>
      </header>
      <Home />
      <main id="main">
        <AboutMe />
        <Skills />
        <Resume />
        {/* <PortFolio /> */}
        <Contact />
      </main>
      <Footer />

  <div className="back-to-top"><i className="bx bx-up-arrow-alt"></i></div>
  <div id="preloader"></div>


    </div>
  );
}

export default App;
