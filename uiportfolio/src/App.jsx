import Services from "./pages/Services";
import Skills from "./pages/Skills";
import { Contact } from "./pages/Contact";
import FloatingNavbar from "./components/FloatingNavbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutMe from "./pages/About";


function App() {
 
  return (
    <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center">
      <FloatingNavbar />
      <Home />
      <Contact />
      <AboutMe />
      <Footer/>
      <Skills />
      <Services />
    </div>
  );
}

export default App;
