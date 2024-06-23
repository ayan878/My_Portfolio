
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import "./App.css";
import MobileNavbar from "./MobileNavbar";

function App() {
  return (
    <div className="App">
      <div className="hidden md:block">
      <Navbar />
      </div>
      <div className="md:hidden"><MobileNavbar/></div>
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
