
import FloatingNavbar from "./components/FloatingNavbar";
import Home from "./pages/Home";


function App() {
  return (
    <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center">
      <FloatingNavbar />
      <Home/>
      {/* <Contact />
      <AboutMe />
      <Footer />
      <Skills />
      <Services /> */}
    </div>
  );
}

export default App;
