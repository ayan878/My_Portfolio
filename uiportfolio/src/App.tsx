
import FloatingNavbar from "./components/FloatingNavbar";
import AboutMe from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center">
      <FloatingNavbar />
      <Home/>
      <AboutMe />

      <Footer />
      {/*
       <Contact />
      <Skills />
      <Services /> */}
    </div>
  );
}

export default App;
