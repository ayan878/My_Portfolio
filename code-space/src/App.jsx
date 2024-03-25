import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./components/AppLayout"
import Home from "./components/Home"
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path:"/",
    children: [
      { path: "/Home", element: <Home /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);
function App() {
  return (
<RouterProvider router={router}/>
  )
}


export default App

