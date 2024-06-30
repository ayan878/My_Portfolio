import FloatingNavbar from "./components/FloatingNavbar";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <FloatingNavbar />
      <Home />
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
