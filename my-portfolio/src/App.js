import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile"; // add this
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingHireButton from "./components/FloatingHireButton";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Profile /> {/* floating profile image here */}
      <About />
      <Skills />
      <Education />
      <Interests />
      <Projects />
      <Contact />
      <Footer />
      <FloatingHireButton />
    </>
  );
}

export default App;
