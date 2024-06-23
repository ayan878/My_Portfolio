
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import MobileNavbar from "./MobileNavbar";
import HomeDesktop from "./Home";

function App() {
  return (
    <div className="App">
      <div className="hidden md:block">
      <Navbar />
      </div>
      <div className="md:hidden"><MobileNavbar/></div>
      <HomeDesktop />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
