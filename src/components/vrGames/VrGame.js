import React from "react";
import { GameBtn, PriceTagSm } from "./GameListStyle";

export default function VrGame({ game }) {
  return (
    <GameBtn>
      <img
        src={process.env.PUBLIC_URL + game.arGame}
        alt={game.arGame}
      />
      <PriceTagSm>${(game.price * (game.disc/100)).toFixed(2) -.01}</PriceTagSm>
    </GameBtn>
  );
}
