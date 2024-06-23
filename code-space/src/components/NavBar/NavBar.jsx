
import { useMediaQuery } from "react-responsive";
import NavBarDesktop from "./NavBarDesktop";
import MobileNavbar from "./MobileNavbar";

const NavBar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1174px)",
  });

  return <div>{isDesktopOrLaptop ? <NavBarDesktop /> : <MobileNavbar />}</div>;
};

export default NavBar;
