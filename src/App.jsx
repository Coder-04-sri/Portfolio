import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";


function App() {

useEffect(() => {
   
      AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
    <Home />
    <About />
    <Projects />
    <Experience />
    <Contact />
      
    </>
  )
}

export default App
