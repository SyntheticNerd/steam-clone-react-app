import React, { useEffect, useState, useRef } from "react";
import { PanelBox, Released, Tag, TagList, ArrowBit } from "./HoverPanelStyle";

export default function HoverPanel({ hover, game }) {
  const [slideNum, setSlideNum] = useState(0);
  const [screenShot, setScreenShot] = useState(`/images/elden_ring_1.png`);
  const imgSlide = useRef(null);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSlideNum((slideNum + 1)%4);
  //     console.log(screenShot);
  //     game && setScreenShot(game.screenShots[slideNum]);
  //     game && imgSlide.current.src; //process.env.PUBLIC_URL + game.screenShots[slideNum]; 
  //   }, 2500);
  //   return () => clearTimeout(timer);
  // }, [screenShot]);
  
  return (
    <PanelBox hover={hover}>
      <ArrowBit />
      <h1>Game Name</h1>
      <Released>Released: 5 Dec, 2019</Released>
      <img
        ref={imgSlide}
        src={process.env.PUBLIC_URL + screenShot}
        alt='/images/elden_ring_1.png'
        width='300px'
      />
      <section>
        <p>Overall User Reviews:</p>
        <p>
          <span>Very Positive</span> (230,321)
        </p>
      </section>
      <b>User Tags:</b>
      <TagList>
        <Tag>Early Access</Tag>
        <Tag>Adventure</Tag>
        <Tag>Exploration</Tag>
        <Tag>Multiplayer</Tag>
      </TagList>
    </PanelBox>
  );
}
