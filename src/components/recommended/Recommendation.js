import React, {useState} from "react";
import HoverPanel from "../hoverInfo/HoverPanel";
import { Disc, ImgCont, ImgLg, Price, RecBox, RevBox } from "./RecStyles";
import UserInfo from "./UserInfo";

export default function Recommendation({ game }) {
  const [hover, setHover] = useState("none");
  return (
    <RecBox onMouseOver={()=>setHover("inline-block")} onMouseLeave={()=>setHover("none")}>
      <HoverPanel hover={hover}/>
      <ImgCont>
        <ImgLg src={process.env.PUBLIC_URL + game.mainAlt} alt={game.mainAlt} />
        <div>
          {game.disc && (
            <Disc>
              <p>-{game.disc}%</p>
            </Disc>
          )}
          <Price>
            <p>${game.price}</p>
            <strong>${(game.price * (game.disc/100)).toFixed(2) -.01}</strong>
          </Price>
        </div>
      </ImgCont>
      <RevBox>
        <b>
          "{game.reviews[0].review}"
        </b>
        <p>Read Entire Review</p>
        {/* change p to anchor for production */}
        <UserInfo review={game.reviews[0]}/>
      </RevBox>
    </RecBox>
  );
}
