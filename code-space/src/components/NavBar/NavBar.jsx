
// import { useMediaQuery } from "react-responsive";
// import NavBarDesktop from "./NavBarDesktop";
// import MobileNavbar from "./MobileNavbar";

// const NavBar = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(min-width: 1024px)",
//   });

//   return isDesktopOrLaptop ? <NavBarDesktop /> : <MobileNavbar />;
// };

// export default NavBar;

import MobileNavbar from './MobileNavbar'
import NavBarDesktop from "./NavBarDesktop";


function NavBar() {
  return (
    <div><div className='md:hidden'><MobileNavbar/></div><div className='hidden md:block'><NavBarDesktop/>
      </div></div>
  )
}

export default NavBar