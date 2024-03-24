import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="container flex justify-around py-8 mx-auto bg-white">
        <div>
          <h3 className="text-2xl font-medium text-blue-500">LOGO</h3>
        </div>
        <div className="space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact US</NavLink>
        </div>
      </nav>
    </>
  );
}
