import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MobileNavbar from "./components/MobileNavbar";
import HomeDesktop from "./pages/Home";
import Skills from "./pages/Skills";


function App() {
  return (
    <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center">
      <MobileNavbar />
      <HomeDesktop />
      <Skills/>
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
