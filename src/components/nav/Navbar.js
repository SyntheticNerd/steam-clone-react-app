import {
  Anchor,
  InstallBtn,
  Language,
  Link,
  Logo,
  NavCont,
  NavLinks,
  NavUtil,
  Line,
  NavBox,
} from "./navStyles";

export default function Navbar() {
  return (
    <NavCont>
      <NavBox>
        <Logo
          src={process.env.PUBLIC_URL + "/images/main_steam_logo.svg"}
          alt='STEAM'
        />
        <NavLinks>
          <Link>
            <p>STORE</p>
            <ul>
              <li><span>HOME</span></li>
              <li><span>DISCOVERY QUEUE</span></li>
              <li><span>WISHLIST</span></li>
              <li><span>POINTS SHOP</span></li>
              <li><span>NEWS</span></li>
              <li><span>STATS</span></li>
            </ul>
          </Link>
          <Link>
            <p>COMMUNITY</p>
            <ul>
              <li><span>HOME</span></li>
              <li><span>DISCUSSION</span></li>
              <li><span>WORKSHOP</span></li>
              <li><span>MARKET</span></li>
              <li><span>BROADCASTS</span></li>
              <li><span>STATS</span></li>
            </ul>
          </Link>
          <Link>
            <p>ABOUT</p>
          </Link>
          <Link>
            <p>SUPPORT</p>
          </Link>
        </NavLinks>
        <NavUtil>
          <InstallBtn>
            <img
              src={process.env.PUBLIC_URL + "/images/download.png"}
              alt='download'
            />
            <p>Install Steam</p>
          </InstallBtn>
          <Anchor>login</Anchor>
          <Line />
          <Language>
            language
            <img
              src={process.env.PUBLIC_URL + "/images/btn_arrow_down_padded.png"}
              alt='expand'
            />
          </Language>
        </NavUtil>
      </NavBox>
    </NavCont>
  );
}
