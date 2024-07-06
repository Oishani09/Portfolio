import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro';
import Skills from "./components/Skills/Skill";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
//import Particles from "./utils.js/particles";
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"; */
import "./index.css";

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
