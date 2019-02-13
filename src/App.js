import React, { Component } from 'react';
import NavBar from './components/NavBar';
import IntroHeader from './components/IntroHeader';
import About from './components/About';
import ProjectsAndResume from './components/ProjectsAndResume';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './css/grayscale.css';

class App extends Component {
  render() {
    return (
        <div>
        <NavBar />
        <IntroHeader />
        <About />
        <ProjectsAndResume />
        <ContactSection />
        <Footer />
        </div>
    );
  }
}

export default App;
