import { Link,NavLink} from "react-router-dom";
import LinkedIn from "../assets/img/nav-icon1.svg";
import Facebook from "../assets/img/nav-icon2.svg";
import Twitter from "../assets/img/nav-icon3.svg";
import Logo from "../assets/img/codeSpace.png";

export default function NavBar() {
  return (
    <nav className="container flex justify-between items-center py-8 mx-auto ">
      <div className="flex space-x-4">
        <img src={Logo} alt="Logo" className="w-14 h-14" /><span className="text-4xl text-white font-bold">codeSpace</span>
      </div>
      <div className="flex space-x-8 items-center">
        <NavLink to="/home" className="text-white font-semibold">
          Home
        </NavLink>
        <NavLink to="/skills" className="text-white font-semibold">
          Skills
        </NavLink>
        <NavLink to="/projects" className="text-white font-semibold">
          Projects
        </NavLink>
        <div className="flex space-x-2 items-center">
          <Link to="https://www.linkedin.com/login">
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="w-8 h-8 rounded-full border border-gray-200 px-2.5"
            />
          </Link>
          <Link to="https://www.facebook.com">
            <img
              src={Facebook}
              alt="Facebook"
              className="w-8 h-8 rounded-full border border-gray-200 px-2 "
            />
          </Link>
          <Link to="https://www.twitter.com">
            <img
              src={Twitter}
              alt="Twitter"
              className="w-8 h-8 rounded-full border border-gray-200 px-2"
            />
          </Link>
        </div>
        <Link className="border border-gray-200 px-4 py-2 rounded-md text-white font-semibold">
          Let's Connect
        </Link>
      </div>
    </nav>
  );
}
