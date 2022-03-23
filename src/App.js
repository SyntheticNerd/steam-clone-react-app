import { StyleVariables } from "./components/StyledComponents";
import { HomePage, HeroCont, Banner } from "./components/StyledComponents";
import Navbar from "./components/nav/Navbar";
import SearchNav from "./components/searchNav/SearchNav";
import Featured from "./components/featured/Featured";
import SpecialOffers from "./components/specialOffers/SpecialOffers";
import Recommended from "./components/recommended/Recommended";
import Browse from "./components/nav/Browse";
import VrGames from "./components/vrGames/VrGames";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <StyleVariables>
      <HomePage>
        <Navbar />
        <HeroCont>
          <SearchNav />
          <img
            src={process.env.PUBLIC_URL + "/images/capcom_hero.png"}
            alt='CAPCOM SALE'
          />
        </HeroCont>
        <div style={{ position: "relative" }}>
          <SideBar/>
          <Featured />
          <br />
          <Banner>
            <img
              src={process.env.PUBLIC_URL + "/images/jrpg_banner.png"}
              alt=''
            />
          </Banner>
          <br />
          <SpecialOffers />
          <Banner>
            <img
              src={process.env.PUBLIC_URL + "/images/steam_banner_1.png"}
              alt=''
            />
            <img
              src={process.env.PUBLIC_URL + "/images/steam_banner_2.png"}
              alt=''
            />
          </Banner>
          <Recommended />
          <Browse />
          <VrGames />
        </div>
      </HomePage>
    </StyleVariables>
  );
}

export default App;
