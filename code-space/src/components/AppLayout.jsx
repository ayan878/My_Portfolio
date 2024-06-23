// import { Outlet } from "react-router-dom"
// import NavBar from "./NavBar"
// import Particle from "./Particle";

// function AppLayout() {
//     return (
//       <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center">
//         <Particle/>
//         <NavBar />
//         <Outlet />
//       </div>
//     );
// }

// export default AppLayout

// AppLayout.js
// import { Outlet } from "react-router-dom";

// import Home from "./Home/Home";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import AboutMe from "./AboutMe";
// import Particle from "./Particle";
// import NavBar from "./NavBar/NavBar";

// function AppLayout() {
//   return (
//     <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center overflow-auto">
//       <Particle />
//       <NavBar />
//       <div>
//         <section id="home">
//           <Home />
//         </section>
//         <section id="skills">
//           <Skills />
//         </section>
//         <section id="projects">
//           <Projects />
//         </section>
//         <section id="about">
//           <AboutMe />
//         </section>
//       </div>
//     </div>
//   );
// }

// export default AppLayout;
import Home from "./Home/Home";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Particle from "./Particle";
import NavBar from "./NavBar/NavBar";
import MobileNavbar from "./NavBar/MobileNavbar";

function AppLayout() {
  return (
    <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center overflow-hidden">
      <Particle />
      <NavBar />
      <MobileNavbar />
      <div className="overflow-y-auto h-full">
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="about" className="min-h-screen">
          <AboutMe />
        </section>
      </div>
    </div>
  );
}

export default AppLayout;
