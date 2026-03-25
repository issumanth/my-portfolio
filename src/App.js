import { useEffect } from "react";
import Header from "./component/Header";
import Hero from "./component/hero.js";
import Cards from "./component/cards.jsx";
import Skills from "./component/skill.js";
import Experience from "./component/experience.jsx";
import Academics from "./component/acadamics.jsx";
import Resume from "./component/resume.jsx";
import About from "./component/aboutme"; 
import Footer from "./component/Footer.js";
import Projects from "./component/projects.js";
function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".fade-up, .slide-left, .slide-right, .zoom-in"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); 
          }

        });
      },
      {
        threshold: 0.3, // triggers when 30% visible
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      
     
      

      {/* HEADER */}
      <Header />
       

      {/* MAIN CONTENT */}
      <div className="w-screen overflow-x-hidden">

        <Hero /> 
        <About />
        <Academics /> 
        <Skills />    
        <Projects />
        <Cards />       
        <Experience />  
        <Resume />      
        <Footer />
      </div>

    
    </>
  );
}
export default App;