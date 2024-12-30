import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Skills from "./components/Skills/Skill";
import Works from "./components/Works/Works";
import BackgroundMusic from './music.mp3'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ThreeScene from "./ThreeScene"; // Import Three.js scene
import { Routes, Route } from 'react-router-dom'; // Don't wrap with Router here

import './App.css'; // Styles for app layout
import "./index.css"; // Global styles (if necessary)

function App() {
  return (
    <div className="App">
      {/* Navbar is common across all pages */}
      <Navbar />

      {/* Routes for different pages */}
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
       </Routes>

      {/* Other components */}
      <Intro />
      <Skills />
      <Works />
      <BackgroundMusic/>

      {/* Three.js scene placed at the end to render in the background */}
      <ThreeScene />
    </div>
  );
}

export default App;
