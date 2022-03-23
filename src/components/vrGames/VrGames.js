import React, { useState, useContext } from "react";
import Paginator from "../Paginator";
import { SectionTitle } from "../StyledComponents";
import { GameList } from "./GameListStyle";
import VrGame from "./VrGame";
import { SteamContext } from "../../utils/context";

export default function VrGames() {
  const [page, setPage] = useState(0);
  const { games } = useContext(SteamContext);
  return (
    <>
      <SectionTitle>THESE GAMES TODAY<button>BROWSE MORE</button></SectionTitle>
      <Paginator setPage={setPage} page={page} length={7}>
        <GameList>
          <SteamContext.Consumer games={{ games }}>
            {(games) => {
              return games.map((game, index) => {
                return <VrGame key={index} game={game} />;
              });
            }}
          </SteamContext.Consumer>
        </GameList>
      </Paginator>
    </>
  );
}
