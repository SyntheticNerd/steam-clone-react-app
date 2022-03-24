import {
  PriceSml,
  Available,
  Cluster,
  ClusterCont,
  GameTitle,
  ImgLg,
  ImgSml,
  InfoSection,
  Tag,
  TagList,
} from "./FeatStyles";
import { useRef, useState } from "react";
import HoverPanel from "../hoverInfo/HoverPanel";

export default function GameCluster({ game }) {
  const hovered = useRef(null);
  const mainImg = useRef(null);

  const [hover, setHover] = useState("none");

  return (
    <ClusterCont onMouseOver={()=>setHover("inline-block")} onMouseLeave={()=>setHover("none")}>
      <HoverPanel hover={hover} game={game}/>
      <ImgLg ref={mainImg} src={process.env.PUBLIC_URL + game.mainImg} alt={game.name} />
      <InfoSection>
        <GameTitle>{game.name.toUpperCase()}</GameTitle>
        <Cluster onMouseLeave={()=>mainImg.current.src=process.env.PUBLIC_URL + game.mainImg}>
          {game.screenShots.map((imgFile, index) => {
            return (
              <ImgSml
                ref={hovered}
                key={index}
                src={process.env.PUBLIC_URL + imgFile}
                alt={imgFile}
                onMouseOver={()=>mainImg.current.src=process.env.PUBLIC_URL + imgFile}
              />
            );
          })}
        </Cluster>
        {game.available ? (
          <Available>Now Available</Available>
        ) : (
          <Available>Coming Soon</Available>
        )}
        <TagList>
          {game.tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </TagList>
        <PriceSml>{`$${game.price}`}{game.platform.map((plat, index)=>{return<img key={index} src={process.env.PUBLIC_URL + `/images/icon_platform_${plat}.png`} alt={plat} />})}</PriceSml>
      </InfoSection>
    </ClusterCont>
  );
}
