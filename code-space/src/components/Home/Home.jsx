import { useMediaQuery } from "react-responsive";
import HomeDesktop from "../Home/HomeDesktop"
import HomeMobile from "../Home/HomeMobile";

function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1174px)",
  });
console.log(`Is desktop or laptop: ${isDesktopOrLaptop}`); 
  return isDesktopOrLaptop ? <HomeDesktop /> : <HomeMobile />;
}

export default Home;
