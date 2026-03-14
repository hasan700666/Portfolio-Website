import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="anton-regular">
      <Navbar></Navbar>
      <div>
        <Home></Home>
      </div>
      <div className="bg-black rounded-b-[14px]">
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
