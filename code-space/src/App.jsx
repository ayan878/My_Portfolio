// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import AppLayout from "./components/AppLayout";
// import Home from "./components/Home/Home";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import AboutMe from "./components/AboutMe";
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     path: "/",
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/home", element: <Home /> },
//       { path: "/skills", element: <Skills /> },
//       { path: "/projects", element: <Projects /> },
//       { path: "/", element: <AboutMe /> },
//     ],
//   },
// ]);
// function App() {
//   return <RouterProvider router={router} />;
// }


import HomeDesktop from "./components/Home/HomeDesktop";
import NavBarDesktop from "./components/NavBar/NavBarDesktop";
import Particle from "./components/Particle";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

// export default App;

function App() {
  return (
    <div className="bg-[url('./src/assets/img/banner-bg.png')] h-screen bg-cover bg-center overflow-hidden">
      <Particle/>
      <NavBarDesktop/>
      <HomeDesktop/>
      <Skills/>
      <Projects/>
      <Services/>
      
    </div>
  );
}

export default App;
