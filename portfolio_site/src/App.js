import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro.js';
import Skills from './components/Skills.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Experience from './components/Experiences.js';
import Projects from './components/Projects.js';
import Collab from './components/Collab.js';
import StartAProject from './components/StartAProject.js';


function App() {
  return (
    <div>
      <NavBar />
      <Intro />


      <About />
      <Skills />
      <Experience />
      <Projects />
      <Collab />
      <StartAProject />
      <Footer />
    </div>
  );
}

export default App;
