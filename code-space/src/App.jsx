import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./components/Home"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
      { path: "/about", element: <AboutMe /> },
    ],
  },
]);
function App() {
  return (
<RouterProvider router={router}/>
  )
}


export default App

