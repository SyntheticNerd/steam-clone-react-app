import React from "react";
import { PanelBox, Released, Tag, TagList, ArrowBit } from "./HoverPanelStyle";

export default function HoverPanel({ hover }) {
  return (
    <PanelBox hover={hover}>
      <ArrowBit/>
      <h1>Game Name</h1>
      <Released>Released: 5 Dec, 2019</Released>
      <img
        src={process.env.PUBLIC_URL + `/images/elden_ring_1.png`}
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
