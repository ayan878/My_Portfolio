import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

function AppLayout() {
    return (
      <div className="bg-[url('./src/assets/img/banner-bg.png')] bg-cover bg-center">
        <NavBar />
        <Outlet />
      </div>
    );
}

export default AppLayout
