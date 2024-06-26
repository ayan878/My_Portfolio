import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import { Contact } from "./pages/Contact";
import FloatingNavbar from "./components/FloatingNavbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
 
  return (
    <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center">
      <FloatingNavbar />
      <Home />
      <Contact />
      <Skills />
      <About />
      <Services />
      <Footer/>
    </div>
  );
}

export default App;
