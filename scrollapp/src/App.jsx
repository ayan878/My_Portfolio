
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import MobileNavbar from "./MobileNavbar";
import HomeDesktop from "./Home";


function App() {
  return (
    <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <HomeDesktop />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
